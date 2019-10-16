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
  'Gallery.card.location.modal.heading': 'Ubicación de la pieza',
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
  'Upload.status.done.message': 'Los datos de la pieza han sido subidos con éxito.',
  'Upload.form.image': 'Imagen',
  'Upload.form.location': 'Ubicación',
  'Upload.form.authors': 'Autores',
  'Upload.form.authors.add': 'Agregar autor',
  'Upload.form.tags': 'Tags',
  'Upload.form.tags.add': 'Agregar tag',
  'Upload.form.submit': 'Subir'
};

const FORM = {
  'Form.authors.placeholder': 'Nombre de usuario...',
  'Form.geolocation.enabled': 'Obtener ubicación',
  'Form.geolocation.disabled': 'No se puede obtener ubicación'
};

const phrases = {
  ...NAVBAR,
  ...GALLERY,
  ...UPLOAD,
  ...FORM
};

export default phrases;
