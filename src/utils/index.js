import { GOOGLE_MAPS_URL, SOCIAL_URLS } from '../constants';
import { t } from '../i18n';

const getMapEmbedURL = (latitude, longitude) => {
  return `${GOOGLE_MAPS_URL}?q=${latitude},${longitude}&saddr=${latitude},${longitude}&z=19&output=embed`;
};

const getSocialURL = (site, userHandle) => {
  const url = SOCIAL_URLS[site];
  return url ? `${url}/${userHandle}/` : null;
};

const updatePageTitle = (suffixKey) => {
  document.title = `${t('Site.title.prefix')} | ${t(suffixKey)}`
};

export {
  getMapEmbedURL,
  getSocialURL,
  updatePageTitle
};
