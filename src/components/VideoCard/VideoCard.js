import React from "react";
import "./VideoCard.css";
import captain from "../../assests/captain2.jpg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
const VideoCard = () => {
  const navigate = useNavigate();

  return (
    <div className="videocard">
      <div className="videocard__img">
        <img src={captain} alt="Thumbnail" onClick={() => navigate("/watch")} />
      </div>
      <div className="videocard__details">
        <AccountCircleIcon />
        <div className="videocard__channel">
          <h1 className="videocard__title" onClick={() => navigate("/watch")}>
            Create a utube clone
          </h1>
          <p
            className="videocard__channelname"
            onClick={() => navigate("/channel")}
          >
            Name of channel
          </p>
          <p className="videocard__channelname">123 views </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
