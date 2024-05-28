import axios from 'axios';

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/search";

const options = {
    url: BASE_URL,
    params: {
        maxResults: '48',
    },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_REPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
};
export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    console.log(data);
    return data;
};

