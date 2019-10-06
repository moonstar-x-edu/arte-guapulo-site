import React  from 'react';
import { Provider } from 'react-redux';
import Router from '../router';
import { store } from '../../redux';
import Firebase, { FirebaseContext } from '../../firebase';
import '../../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <Router />
      </Provider>
    </FirebaseContext.Provider>
  );
};

export default App;
