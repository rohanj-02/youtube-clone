import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";

const VideoListItem = (props) =>{

    if(!props.video){
        return(
            <p> No data</p>
        )
    }

    const {video, onVideoSelect, selectedVideo} = props;
    const {thumbnails, title, channelTitle} = video.snippet;
    if(video.id.videoId === selectedVideo.id.videoId){
        return(
            <p></p>
        )
    }
    return(
        <Grid container spacing = {5} style={{padding: "15px"}}>
            <Grid item xs = {10}>
                <Paper style={{display: 'flex', alignItems: 'center', cursor:'pointer'}} onClick = {()=>onVideoSelect(video)}>
                    <Grid container spacing ={5}>
                        <Grid item xs = {4}>
                            <img style ={{marginRight :"10px"}} src = {thumbnails.default.url} alt ="Thumbnail"/>
                        </Grid>
                        <Grid item xs = {6}>
                            <Typography variant="subtitle1">{title}</Typography>
                            <Typography variant="subtitle2">{channelTitle}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default VideoListItem;