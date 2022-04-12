import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Channel from "./components/Channel/Channel";
import ChannelAllVideos from "./components/ChannelVideo/ChannelAllVideos";
import ChannelVideo from "./components/ChannelVideo/ChannelVideo";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import SideBar from "./components/SideBar/SideBar";
import Watch from "./components/Watch/Watch";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__main">
        <SideBar hide />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="watch" element={<Watch />} />
          <Route path="channel" element={<Channel />}>
            <Route index element={<ChannelVideo />} />
            <Route path="allvideo" element={<ChannelAllVideos />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
