import React from "react";
import {Grid} from "@material-ui/core";
import VideoListItem from "./VideoListItem";

const VideoList = (props) =>{
    const {videos, onVideoSelect, selectedVideo} = props;
    if(!videos){
        return(
            <p>Search Something</p>
        )
    }
    // let listOfVideos = [];
    // for(let i = 0; i < videos.length; i++){
    //     listOfVideos.push((onVideoSelect, video, i) => <VideoListItem onVideoSelect={onVideoSelect} key = {i} video = {video}/>)
    // }
    const listOfVideos = videos.map((video, id) => <VideoListItem onVideoSelect= {onVideoSelect} key = {id} video = {video} selectedVideo={selectedVideo}/>);
    return(
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )
}

export default VideoList