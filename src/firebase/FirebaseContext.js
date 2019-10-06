import React from 'react';

const FirebaseContext = React.createContext(null);

const withFirebase = (Component) => {
  return (props) => {
    return (
      <FirebaseContext.Consumer>
        {
          (firebase) => (
            <Component {...props} firebase={firebase} />
          )
        }
      </FirebaseContext.Consumer>
    );
  };
};

export {
  FirebaseContext,
  withFirebase
};

export default FirebaseContext;
