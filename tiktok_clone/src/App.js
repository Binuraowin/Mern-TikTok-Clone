import axios from "./axios";
import './App.css';
import Video from "./Video";
import VideoFooter from "./VideoFooter";
import React, {useEffect, useState} from "react";
import VideoSidebar from "./VideoSidebar";

function App() {
    const [videos,setVideos] = useState([]);
    useEffect(() =>{
        //get data function
        async function fetchPosts() {
            const response = await  axios.get("/v2/posts");
            //save data to the setvideos from response
            setVideos(response.data);
        return response;
        }
        fetchPosts();
    },[]);

  return (
    <div className="app">
        <h1>Binura</h1>
        <div className={'app_videos'}>
            {videos.map(
                ({url, channel, description, song, likes, shares, messages}) =>(
                    <Video url={url}
                           channel={channel}
                           description={description}
                           song={song}
                           likes={likes}
                           shares={shares}
                           messages={messages}/>
                )
            )}

        </div>


    </div>
  );
}

export default App;
