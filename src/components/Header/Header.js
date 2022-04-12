import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import youtube from "../../assests/youtube.png";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VideocamIcon from "@mui/icons-material/Videocam";
import AppsIcon from "@mui/icons-material/Apps";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon className="header__menuIcon" />
        <img src={youtube} alt="" className="header__logo" />
      </div>
      <form className="header__center">
        <input type="text" placeholder="Search" className="header__input" />
        <Button className="header__btn">
          <SearchIcon className="header__searchIcon" />
        </Button>
      </form>
      <div className="header__right">
        <VideocamIcon />
        <AppsIcon />
        <NotificationsIcon />
        <AccountCircleIcon aria-describedby={id} onClick={handleClick} />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
        >
          <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
