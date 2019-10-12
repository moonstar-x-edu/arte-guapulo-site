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

const UPLOAD = {
  'Upload.error.heading': 'Oops! Something went wrong when trying to upload the image...',
  'Upload.error.message': "I couldn't upload the image to the server. Try again later.",
  'Upload.success.message': 'Image has been successfully uploaded!',
  'Upload.status.uploading': 'Uploading...',
  'Upload.status.error.heading': 'Oops! Something went wrong when trying to upload the piece data...',
  'Upload.status.error.message': "I couldn't upload the piece data to the server. Here's an error message:",
  'Upload.status.done.heading': 'Done!',
  'Upload.status.done.message': 'The piece data has been successfully uploaded.',
  'Upload.form.image': 'Image',
  'Upload.form.location': 'Location',
  'Upload.form.authors': 'Authors',
  'Upload.form.authors.add': 'Add author',
  'Upload.form.tags': 'Tags',
  'Upload.form.tags.add': 'Add tag',
  'Upload.form.submit': 'Upload'
};

const FORM = {
  'Form.authors.facebook': 'Facebook Username',
  'Form.authors.twitter': 'Twitter Username',
  'Form.authors.instagram': 'Instagram Username',
  'Form.geolocation.enabled': 'Get location',
  'Form.geolocation.disabled': "Can't get location"
};

const phrases = {
  ...NAVBAR,
  ...GALLERY,
  ...UPLOAD,
  ...FORM
};

export default phrases;
