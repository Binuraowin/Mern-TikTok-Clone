
import './App.css';
import Video from "./Video";
import VideoFooter from "./VideoFooter";
import React from "react";
import VideoSidebar from "./VideoSidebar";

function App() {
  return (
    <div className="app">
        <h1>Binura</h1>
        <div className={'app_videos'}>
            <Video url="https://www.tiktok.com/@zayn_inzi/video/6913604483041873153"
                   channel="Binura" description="description" song="song here" likes={111} shares={120} messages={150}/>
            <Video url="https://www.youtube.com/watch?v=8fPPfB0XZd4" channel="Binura" description="description" song="song here" likes={111} shares={120} messages={150}/>
            {/*<Video url="https://www.youtube.com/watch?v=8fPPfB0XZd4"/>*/}
        </div>


    </div>
  );
}

export default App;
