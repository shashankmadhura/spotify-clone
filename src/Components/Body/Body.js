import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useStateProviderValue } from "../../ContextApi/StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ workout }, dispatch] = useStateProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={workout?.images[0].url} alt="edf" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{workout?.name}</h2>
          <p>{workout?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffleIcon" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {workout?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
