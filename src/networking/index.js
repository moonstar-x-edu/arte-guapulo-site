import axios from 'axios';

const endpoint = (path) => {
  return process.env.REACT_APP_API_URL + path;
};

const getGalleryRequest = () => {
  return axios.get(endpoint('all'));
};

export {
  getGalleryRequest
};
