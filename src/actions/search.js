import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
    return (dispatch) => {
      searchYouTube({YOUTUBE_API_KEY, q}, (videos) => dispatch(changeVideoList(videos)));
    }
  

};

export default handleVideoSearch;

// return searchYouTube({YOUTUBE_API_KEY, q}, ({items}) => {
//   if (callback) {
//     callback(items);
//   }
// });

// {
//   type: q,
//   value: searchYouTube({YOUTUBE_API_KEY, q})
// }