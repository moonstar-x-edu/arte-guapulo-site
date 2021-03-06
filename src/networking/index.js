import axios from 'axios';

const endpoint = (path) => {
  return process.env.REACT_APP_API_URL + path;
};

const getGalleryRequest = () => {
  return axios.get(endpoint('all'));
};

const postPieceRequest = (body) => {
  return axios.post(endpoint('create'), body);
};

export {
  getGalleryRequest,
  postPieceRequest
};
