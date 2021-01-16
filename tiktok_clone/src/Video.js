import React, {useRef, useState} from 'react';
import './Video.css'
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video() {
    const videoRef = useRef(null);
    const [playing,setPlaying] = useState(false);


    function handleVideoPress() {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        }else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
           <video className="video__player"
                  loop
                  ref={videoRef}
                  onClick={handleVideoPress}
               src="https://www.youtube.com/watch?v=D5ykNC3ABEo">

           </video>
            <VideoFooter/>
            <VideoSidebar/>
        </div>
    );
}

export default Video;

