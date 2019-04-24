import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

var VideoListContainer = () => {};

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.
const changeVideoList = (videos, filter) => {
    switch (filter) {
        case 'CHANGE_VIDEO_LIST':
            return videos
        default:
            throw new Error('Dont have ' + filter)
    }
}

const mapStateToProps = state => ({
    videos: changeVideoList(state.videos, state.changeVideoList)
})

// export default connect(mapStateToProps)(changeVideoList)
export default VideoListContainer;
