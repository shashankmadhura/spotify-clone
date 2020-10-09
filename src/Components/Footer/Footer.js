import React,{useEffect} from "react";
import "./Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import {useStateProviderValue} from '../../ContextApi/StateProvider'

const Footer = ({spotify}) => {
  const [{ token, item, playing }, dispatch] = useStateProviderValue();
  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {

      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });

      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
 
  }, [spotify]);


  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: "SET_PLAYING",
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((r) => {
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
      dispatch({
        type: "SET_PLAYING",
        playing: true,
      });
    });
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo"  src="data:image/jpeg;base64,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"
        //src={item?.album.images[0].url}
          alt={item?.name} />
        {item ? (
          <div className="footer__songInfo">
            {/* <h4>{item.name}</h4> */}
            <h4>A Different Way</h4>
            {/* <p>{item.artists.map((artist) => artist.name).join(", ")}</p> */}
            <p>Song •DJ Snake, Lauv </p>
          </div>
        ) : (
          // <div className="footer__songInfo">
          //   <h4>No song is playing</h4>
          //   <p>...</p>
          // </div>
                    <div className="footer__songInfo">
                    {/* <h4>{item.name}</h4> */}
                    <h4>A Different Way</h4>
                    {/* <p>{item.artists.map((artist) => artist.name).join(", ")}</p> */}
                    <p>Song •DJ Snake, Lauv </p>
                  </div>
        )}
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipNext}  className="footer__icon" />
        {playing?<PlayCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer__icon" />:<PauseCircleOutlineIcon onClick={handlePlayPause} fontSize="large" className="footer__icon" />}
        <SkipNextIcon  onClick={skipPrevious}  className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
