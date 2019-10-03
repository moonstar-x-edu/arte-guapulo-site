import React  from 'react';
import { Provider } from 'react-redux';
import Router from '../router';
import { store } from '../../redux';
import '../../styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return(
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
