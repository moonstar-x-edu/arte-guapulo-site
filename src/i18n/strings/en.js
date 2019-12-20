const NAVBAR = {
  'Navbar.brand': 'Art in Guápulo',
  'Navbar.home': 'Home',
  'Navbar.gallery': 'Gallery',
  'Navbar.locale.toggle': 'Language Select',
  'Navbar.locale.english': 'English',
  'Navbar.locale.spanish': 'Spanish'
};

const GALLERY = {
  'Gallery.card.title': 'Information',
  'Gallery.card.location': 'Location',
  'Gallery.card.location.show': 'Show location',
  'Gallery.card.author': 'Author',
  'Gallery.card.authors': 'Authors',
  'Gallery.card.tags': 'Tags',
  'Gallery.card.location.modal.heading': "Piece's location",
  'Gallery.loading': 'Loading images...',
  'Gallery.error.heading': 'Oops! Something went wrong when trying to get the gallery information...',
  'Gallery.error.message': 'There was an error when trying to fetch all the gallery pieces information. If you see this message, contact the website administrator.',
  'Gallery.warning.heading': "There's no gallery pieces to show!",
  'Gallery.warning.message': 'No gallery pieces are available to show. If you see this message, contact the website administrator.',
  'Gallery.filters.info.message': 'No gallery pieces meet your currently set filters.',
  'Gallery.filters.search.placeholder': 'Filter by tags...',
  'Gallery.filters.search.add': 'Add filter',
  'Gallery.filters.search.reset': 'Reset filters'
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
  'Form.authors.placeholder': 'Username...',
  'Form.authors.placeholder.justName': 'Name...',
  'Form.geolocation.enabled': 'Get location',
  'Form.geolocation.disabled': "Can't get location"
};

const NOT_FOUND = {
  'NotFound.title': 'Oops, not found!',
  'NotFound.description': 'The page you were trying to access was not found.',
  'NotFound.link': 'Go to Home'
};

const SITE = {
  'Site.title.prefix': 'Art in Guápulo',
  'Site.title.notFound': 'Not Found!',
  'Site.title.home': 'Home',
  'Site.title.gallery': 'Gallery',
  'Site.title.upload': 'Data Upload'
};

const HOME = {
  'Home.cards.description.first': 'This site is a small project done for the "Ser y Cosmos" course of the ' +
    'Universidad San Francisco de Quito. This website pretends to serve as a gallery for the graffiti and murals ' +
    'found in the Guápulo neighborhood of Quito, Ecuador.',
  'Home.cards.description.second': 'Since the aforementioned neighborhood is known for being a spot of abundant ' +
    'graffiti, I thought it would be a great idea to have a way to display these art pieces with their respective ' +
    'author and geolocation. With this in mind, I decided to work on this website.',
  'Home.cards.os.first': 'This website is an open source project, it is long from being perfect but the intentions ' +
    'are there. If you wish to contribute, you can fork the project or make a pull request on the ',
  'Home.cards.os.bitbucket': 'Bitbucket Repo.',
  'Home.cards.os.email': 'You can also contact me by email.'
};

const phrases = {
  ...NAVBAR,
  ...GALLERY,
  ...UPLOAD,
  ...FORM,
  ...NOT_FOUND,
  ...SITE,
  ...HOME
};

export default phrases;
