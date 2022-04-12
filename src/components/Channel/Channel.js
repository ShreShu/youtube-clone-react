import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Channel.css";
import bannerUrl from "../../assests/banner1.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
const Channel = () => {
  return (
    <div className="channel">
      <div className="channel__banner">
        {/* Banner image */}

        <img src={bannerUrl} />
      </div>
      <div className="channel__Info">
        {/* name,subscriber,subscribe button */}
        <div className="creater__account">
          <AccountCircleIcon fontSize="large" />
          <div className="channel_Creater">
            <p>Pulkit gupta</p>
            <p>123.45K subscriber</p>
          </div>
        </div>
        <div className="creater__subscribe">
          <Button variant="contained" color="error">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="channel__routes">
        <div className="channel__Links">
          {/* routing options */}
          <Link to="">Home</Link>
          <Link to="allvideo">Videos</Link>
          <Link to="">Playlist</Link>
          <Link to="">Community</Link>
          <Link to="">Channels</Link>
          <Link to="">About</Link>
          <Link to="">Search</Link>
        </div>
      </div>
      <div className="channel__routerOutlet">
        {/* videos */}
        <Outlet />
      </div>
    </div>
  );
};

export default Channel;
