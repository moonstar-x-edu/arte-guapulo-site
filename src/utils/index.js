import { GOOGLE_MAPS_URL } from '../constants';

const getMapEmbedURL = (latitude, longitude) => {
  return `${GOOGLE_MAPS_URL}?q=${latitude},${longitude}&saddr=${latitude},${longitude}&z=19&output=embed`;
};

export {
  getMapEmbedURL
};
