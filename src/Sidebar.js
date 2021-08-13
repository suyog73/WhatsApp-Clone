import React from "react";
import SidebarChat from "./SidebarChat";
import "./Sidebar.css";
import IconButton from "@material-ui/core/IconButton";
// import SettingsIcon from "@material-ui/icons/Settings";
import Avatar from "@material-ui/core/Avatar";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQFR2V9bMdUGIQ/profile-displayphoto-shrink_200_200/0/1610977733921?e=1634169600&v=beta&t=BqlBrXc_BZa4Fm73g-wdbqSqc1-uk4BKOSJES81KAlI" />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="sidebar_chats">
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
