import axios from 'axios';

const API_URL = 'http://localhost:8080/chat';

export const sendMessage = (message) => {
    return axios.post(API_URL, { message });
};
