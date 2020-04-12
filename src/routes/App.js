import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Contenido from '../components/Contenido';
import Formacion from '../components/Formacion';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Contenido} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

