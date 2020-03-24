import React from 'react';
import axios from 'axios';
import './App.css'
import Searchbar from './Components/Searchbar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends React.Component {

    state = {
        videos: [],
        onSelectVideo: ''
    }

    componentDidMount() {
        this.seachForApi('buildings')
    }

    seachForApi = async(term) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                q: term,
                part: 'snippet',
                maxResults: 3,
                key: 'AIzaSyB52NPbCDI-444LdIfwALz11CDeUe52OgM'
            }
        });

        this.setState({
            videos: response.data.items,
            onSelectVideo: response.data.items[0]
        })
    }

    onVideoSelect = (video) => {
        this.setState({
            onSelectVideo: video
        })
    }

    render() {
        return(
            <div className="container-fluid" style={{backgroundColor: '#eeeeee',padding:'5px'}}>
                <Searchbar search={this.seachForApi}/>
                <div className="video-cont">
                <VideoDetail video={this.state.onSelectVideo}/>
                <VideoList videos={this.state.videos} selectVideo={this.onVideoSelect}/>
                </div>
            </div>
        )
    }
}

export default App;