import React from "react";
import "./SideBar.css";
import SidebarOption from "../SidebarOptions/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "../../ContextApi/StateProvider";

const SideBar = () => {
  //pull from playlists
  const [{ playlists }, dispatch] = useStateProviderValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <SidebarOption option="Home" Icon={HomeIcon} />
      <SidebarOption option="Search" Icon={SearchIcon} />
      <SidebarOption option="Your Library" Icon={LibraryMusicIcon} />
      <strong className="SidebarOption__title">PLAYLIST</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption option={playlist.name} />
      ))}
    </div>
  );
};

export default SideBar;
