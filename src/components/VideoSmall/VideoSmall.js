import React from "react";
import "./VideoSmall.css";
import captain from "../../assests/captain2.jpg";
import { useNavigate } from "react-router-dom";
const VideoSmall = () => {
  const navigate = useNavigate();
  return (
    <div className="suggestion">
      <div className="watch__suggestion">
        <div className="watch__suggestionContainer">
          <div
            className="watch__suggestionImage"
            onClick={() => navigate("/watch")}
          >
            <img src={captain} alt="" className="watch__suggestionThumbnail" />
          </div>
          <div className="watch__suggestionInfo">
            <h5>Create a youtube clone</h5>
            <p onClick={() => navigate("/channel")}>Pulkit Gupta</p>
            <p>1.2K views 1 year ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSmall;
