import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getToken } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useStateProviderValue } from "./ContextApi/StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      window.localStorage.setItem("token", _token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("38eWtRJ5qh6Q1EkCWdgo1p").then((response) => {
        dispatch({
          type: "SET_WORKOUT",
          workout: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
