import Redux from 'redux';
import changeVideoList from '../actions/videoList';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch(action.type){
    case 'CHANGE_VIDEO_LIST':
      return action.videos;

    default:
      return state;
  }
    

};

export default videoListReducer;
