import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Gallery from '../gallery';
import Home from '../home';
import { NotFound } from '../../errorPages';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/gallery">
          <Gallery/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default  Router;
