import axios from 'axios';

const KEY = 'AIzaSyD0cHTt_GFC9AlTe5nvKvtTvByBKNsVb04';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});