import axios from 'axios';

const endpoint = (path) => {
  return process.env.API_URL + path;
};

const getGalleryRequest = () => {
  return axios.get(endpoint('all'));
};

export {
  getGalleryRequest
};
