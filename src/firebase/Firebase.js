import app from 'firebase/app';
import 'firebase/storage';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.storage = app.storage();
  }

  uploadImage(image, handleProgress, handleError, handleComplete) {
    const storageRef = this.storage.ref();
    const imageRef = storageRef.child(`gallery-images/${new Date().toDateString()} - ${image.name}`);

    const uploadTask = imageRef.put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        handleProgress(snapshot.bytesTransferred / snapshot.totalBytes);
      },
      (error) => {
        handleError(error);
      },
      () => {
        imageRef.getDownloadURL()
          .then((url) => {
            handleComplete(url);
          })
          .catch((error) => {
            handleError(error);
          });
      }
    );
  }
}

export default Firebase;
