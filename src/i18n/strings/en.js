const NAVBAR = {
  'Navbar.brand': 'Art in Guápulo',
  'Navbar.home': 'Home',
  'Navbar.gallery': 'Gallery'
};

const GALLERY = {
  'Gallery.card.location': 'Location',
  'Gallery.card.author': 'Author',
  'Gallery.card.authors': 'Authors',
  'Gallery.card.tags': 'Tags',
  'Gallery.loading': 'Loading images...',
  'Gallery.error.heading': 'Oops! Something went wrong when trying to get the gallery information...',
  'Gallery.error.message': 'There was an error when trying to fetch all the gallery pieces information. If you see this message, contact the website administrator.',
  'Gallery.warning.heading': "There's no gallery pieces to show!",
  'Gallery.warning.message': 'No gallery pieces are available to show. If you see this message, contact the website administrator.'
};

const phrases = {
  ...NAVBAR,
  ...GALLERY
};

export default phrases;
