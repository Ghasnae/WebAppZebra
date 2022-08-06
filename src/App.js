import React, {useState, useCallback} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';


const App = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
};

export default App;


