import React from "react";
import "./Watch.css";
import videoUrl from "../../assests/video.mp4";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ReplyIcon from "@mui/icons-material/Reply";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VideoCard from "./../VideoCard/VideoCard";
import captain from "../../assests/captain2.jpg";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoSmall from "../VideoSmall/VideoSmall";
import { useNavigate } from "react-router-dom";
const Watch = () => {
  const navigate = useNavigate();
  return (
    <div className="watch">
      <div className="watch__wrap">
        <div className="watch__videoContent">
          <div className="watch__left">
            <video src={videoUrl} className="watch__video" autoPlay controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="watch__info">
              <div className="watch__videoTitle">
                <h1>Video title|Some text | some text</h1>
              </div>
              <div className="watch__view">
                <div className="watch__viewCount">
                  <p>3,065,107 views Apr 1,2022</p>
                </div>
                <div className="watch__viewLikeDislike">
                  <div className="watch__viewLike">
                    <ThumbUpIcon />
                    <p>190K</p>
                  </div>
                  <div className="watch__viewDislike">
                    <ThumbDownIcon />
                    <p>190</p>
                  </div>
                  <div className="watch__viewShare">
                    <ReplyIcon />
                    <p>Share</p>
                  </div>
                  <div className="watch__viewSave">
                    <PlaylistAddIcon />
                    <p>Save</p>
                  </div>
                  <div className="watch__viewMore">
                    <MoreHorizIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="watch__createrData">
            <div className="watch__creater">
              <AccountCircleIcon className="watch__createrIcon" />
              <div className="watch__createrName">
                <h3 onClick={() => navigate("/channel")}>Pulkit Gupta</h3>
                <p>1.33K Subscribers</p>
              </div>
            </div>
            <div className="watch__subscribe">
              <Button variant="contained" color="error">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="watch__description">
            <p>
              If you founnd this video helpful,make sure to leave us a
              like,rating as it really helps me with the youtube algorithm Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        <div className="watch__right">
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
          <VideoSmall />

          <VideoSmall />
          <VideoSmall />
          <VideoSmall />
        </div>
      </div>
    </div>
  );
};

export default Watch;
