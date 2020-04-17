import React from "react";
import {Paper, Typography, Divider} from "@material-ui/core";

const VideoPlayer = (props) =>{
    const {video} = props;
    console.log(video);
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    if(!video){
        return(
            <div>
                <h4>Loading...</h4>
                <p>Search something to load a video</p>
            </div>
        )
    }
    
    const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <React.Fragment>
            <Paper title = "Video Player" style={{height: 0.6*height}}>
                <iframe frameBorder = "0" title="VideoPlayer" height="100%" width="100%" src = {videoURL}></iframe>
            </Paper>
            <Paper title = "Description Box" style = {{padding : 15}}>
                <div style={{padding : 10}}>
                    <Typography variant = "h5">{video.snippet.title}</Typography>
                </div>
                <Divider/>
                <div style={{padding : 12}}>
                    <Typography>{video.snippet.channelTitle}</Typography>
                </div>
                <Divider/>
                <div style={{padding:12}}>
                    <Typography>{video.snippet.description}</Typography>
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default VideoPlayer;