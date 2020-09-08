import React from "react";
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar, VideoPlayer, VideoList} from './components/index';
import config from './api/config';

class App extends React.Component{
    state = {
        videos : [],
        selectedVideo : null,
    }

    componentDidMount(){
        this.handleSubmit('youtube');
    }

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video});
    }

    handleSubmit = async (searchTerm) =>{
        const response = await youtube.get("search",{ 
            params : { 
                part: 'snippet',
                maxResults: '5',
                key: config.API_KEY,
                q : searchTerm,
                type: 'video',
            }});
        console.log(response.data.items);
        this.setState({videos : response.data.items, selectedVideo : response.data.items[0] });
    }

    render(){
        const {selectedVideo, videos} = this.state;
        return(
            <Grid justify="center" container spacing = {10}>
                <Grid item xs={12}>
                    <Grid container spacing={10} style={{padding: "25px"}}>
                        <Grid item xs={2}>
                            <h4> Logo </h4>
                        </Grid>
                        <Grid item xs={8}>
                            <SearchBar onFormSubmit = {this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing = {10}>
                        <Grid item xs={1}></Grid>
                            <Grid item xs={7}>
                                <VideoPlayer video = {selectedVideo}/>
                            </Grid>
                            <Grid item xs={4}>
                                <VideoList videos = {videos} selectedVideo={selectedVideo} onVideoSelect = {this.onVideoSelect}/>
                            </Grid>
                        </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;