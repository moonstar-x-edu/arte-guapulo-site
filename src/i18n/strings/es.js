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

const UPLOAD = {
  'Upload.error.heading': '¡Ups! Algo sucedió al subir la imagen al servidor...',
  'Upload.error.message': 'No fue posible subir la imagen al servidor, intentalo más tarde.',
  'Upload.success.message': '¡La imagen ha sido subida exitosamente!',
  'Upload.status.uploading': 'Subiendo...',
  'Upload.status.error.heading': '¡Ups! Algo sucedió al subir los datos de la pieza al servidor...',
  'Upload.status.error.message': "No fue posible subir los datos de la pieza. El error fue:",
  'Upload.status.done.heading': '¡Listo!',
  'Upload.status.done.message': 'Los datos de la pieza han sido subidos con éxito.'
};

const FORM = {
  'Form.authors.facebook': 'Usuario de Facebook',
  'Form.authors.twitter': 'Usuario de Twitter',
  'Form.authors.instagram': 'Usuario de Instagram'
};

const phrases = {
  ...NAVBAR,
  ...GALLERY,
  ...UPLOAD,
  ...FORM
};

export default phrases;
