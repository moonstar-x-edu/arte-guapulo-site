import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from '../common/navbar';
import Gallery from '../gallery';
import Home from '../home';
import Upload from '../upload';
import { NotFound } from '../../errorPages';

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="my-4">
        <Switch>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/upload">
            <Upload />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
