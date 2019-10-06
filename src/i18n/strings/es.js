const NAVBAR = {
  'Navbar.brand': 'Arte en Guápulo',
  'Navbar.home': 'Inicio',
  'Navbar.gallery': 'Galería'
};

const GALLERY = {
  'Gallery.card.location': 'Ubicación',
  'Gallery.card.author': 'Autor',
  'Gallery.card.authors': 'Autores',
  'Gallery.card.tags': 'Tags',
  'Gallery.loading': 'Cargando imágenes...',
  'Gallery.error.heading': '¡Ups! Algo sucedió al tratar de descargar la galería...',
  'Gallery.error.message': 'Hubo un error al descargar la información de las piezas de la galería. Si ve este mensaje, contacte al administrador de la página.',
  'Gallery.warning.heading': '¡No hay piezas de galería para mostrar!',
  'Gallery.warning.message': 'No hay piezas de galería que mostrar. Si ve este mensaje, contacte al administrador de la página.'
};

const phrases = {
  ...NAVBAR,
  ...GALLERY
};

export default phrases;
