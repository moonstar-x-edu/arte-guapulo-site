import { GOOGLE_MAPS_URL, SOCIAL_URLS } from '../constants';

const getMapEmbedURL = (latitude, longitude) => {
  return `${GOOGLE_MAPS_URL}?q=${latitude},${longitude}&saddr=${latitude},${longitude}&z=19&output=embed`;
};

const getSocialURL = (site, userHandle) => {
  const url = SOCIAL_URLS[site];
  return `${url}/${userHandle}/`;
};

export {
  getMapEmbedURL,
  getSocialURL
};
