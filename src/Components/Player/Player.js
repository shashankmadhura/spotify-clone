import React from "react";
import "./Player.css";
import SideBar from "../SideBar/SideBar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="palyer">
      <div className="player__body">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
};

export default Player;
