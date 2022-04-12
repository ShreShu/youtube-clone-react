import React from "react";
import "./SideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import ExploreIcon from "@mui/icons-material/Explore";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
const SideBar = ({ hide }) => {
  const navigate = useNavigate();
  return (
    <div className={`sidebar ${hide && "sidebar__extrawidth"}`}>
      <div className="sidebar__buttons">
        <div
          className="sidebar__btn sidebar__btn--active"
          onClick={() => navigate("/")}
        >
          <HomeIcon className="sidebar__icon" />
          {hide ? "" : <p>Home</p>}
        </div>
        <div className="sidebar__btn">
          <ExploreIcon className="sidebar__icon" />
          {hide ? "" : <p>Explore</p>}
        </div>
        <div className="sidebar__btn">
          <SubscriptionsIcon className="sidebar__icon" />
          {hide ? "" : <p>Subscription</p>}
        </div>
      </div>
      <div className="sidebar__buttons bottom">
        <div className="sidebar__btn">
          <LibraryAddIcon className="sidebar__icon" />
          {hide ? "" : <p>Library</p>}
        </div>
        <div className="sidebar__btn">
          <HistoryIcon className="sidebar__icon" />
          {hide ? "" : <p>History</p>}
        </div>
        <div className="sidebar__btn">
          <ThumbUpIcon className="sidebar__icon" />
          {hide ? "" : <p>Liked Videos</p>}
        </div>

        <div className="sidebar__btn sidebar__btn--active">
          <AccessTimeIcon className="sidebar__icon" />
          {hide ? "" : <p>Watch Later</p>}
        </div>
        <div className="sidebar__btn sidebar__btn--active">
          <OndemandVideoIcon className="sidebar__icon" />
          {hide ? "" : <p>Your videos</p>}
        </div>
        <div className="sidebar__btn sidebar__btn--active">
          <ExpandMoreIcon className="sidebar__icon" />
          {hide ? "" : <p>Show More</p>}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
