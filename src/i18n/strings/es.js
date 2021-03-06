const NAVBAR = {
  'Navbar.brand': 'Arte en Guápulo',
  'Navbar.home': 'Inicio',
  'Navbar.gallery': 'Galería',
  'Navbar.locale.toggle': 'Seleccionar Idioma',
  'Navbar.locale.english': 'Inglés',
  'Navbar.locale.spanish': 'Español'
};

const GALLERY = {
  'Gallery.card.title': 'Información',
  'Gallery.card.location': 'Ubicación',
  'Gallery.card.location.show': 'Mostrar ubicación',
  'Gallery.card.author': 'Autor',
  'Gallery.card.authors': 'Autores',
  'Gallery.card.tags': 'Tags',
  'Gallery.card.location.modal.heading': 'Ubicación de la pieza',
  'Gallery.loading': 'Cargando imágenes...',
  'Gallery.error.heading': '¡Ups! Algo sucedió al tratar de descargar la galería...',
  'Gallery.error.message': 'Hubo un error al descargar la información de las piezas de la galería. Si ve este mensaje, contacte al administrador de la página.',
  'Gallery.warning.heading': '¡No hay piezas de galería para mostrar!',
  'Gallery.warning.message': 'No hay piezas de galería que mostrar. Si ve este mensaje, contacte al administrador de la página.',
  'Gallery.filters.info.message': 'Ninguna pieza cumple con los filtros actuales.',
  'Gallery.filters.search.placeholder': 'Filtrar por tags...',
  'Gallery.filters.search.add': 'Agregar filtro',
  'Gallery.filters.search.reset': 'Reiniciar filtros'
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
  'Form.authors.placeholder.justName': 'Nombre...',
  'Form.geolocation.enabled': 'Obtener ubicación',
  'Form.geolocation.disabled': 'No se puede obtener ubicación'
};

const NOT_FOUND = {
  'NotFound.title': '¡Ups, página no encontrada!',
  'NotFound.description': 'La página que intentó acceder no existe.',
  'NotFound.link': 'Ir a inicio'
};

const SITE = {
  'Site.title.prefix': 'Arte en Guápulo',
  'Site.title.notFound': '¡Página no Encontrada!',
  'Site.title.home': 'Inicio',
  'Site.title.gallery': 'Galería',
  'Site.title.upload': 'Subida de Datos'
};

const HOME = {
  'Home.cards.description.first': 'Este sitio es un pequeño proyecto realizado para el curso de "Ser y Cosmos" de la ' +
    'Universidad San Francisco de Quito. Este sitio pretende servir como una galería del graffiti y murales ' +
    'encontrados en el barrio de Guápulo de Quito, Ecuador.',
  'Home.cards.description.second': 'Ya que el barrio mencionado previamente es conocido por ser un lugar con ' +
    'abundantes graffitis, pensé que sería una buena idea tener una manera de mostrar estas piezas de arte con su ' +
    'respectivo autor y ubicación geográfica. Con esto en mente, decidí realizar esta página web.',
  'Home.cards.os.first': 'Este sitio web es un proyecto de fuente abierta. Está lejos de ser perfecto pero las ' +
    'intenciones son las que cuentan. Si deseas contribuir, puedes realizar un fork del proyecto o realizar un ' +
    'pull request en el ',
  'Home.cards.os.bitbucket': 'Repo de Bitbucket.',
  'Home.cards.os.email': 'También me puedes contactar por email.'
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
