import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import HelloWorld from '../components/HelloWorld';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={HelloWorld} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

