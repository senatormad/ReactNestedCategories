import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import routes from './routes';
import { generateAppRoutes } from './routing';

const appRoutes = generateAppRoutes(routes);

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {appRoutes.map((route) => {
          return (
            <Route key={route.path} path={route.path}>
              <Layout route={route} />
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
