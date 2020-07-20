import React from 'react';

import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/products';

const Routes = () => (
// BrowserRouter Definine as rotas através de Browser
// Switch permitir que apenas uma rota seja chamada ao mesmo tempo
<BrowserRouter> 
<Switch>    
    <Route exact path="/" component={Main} />
    <Route path="/products/:id" component={Product} />
</Switch>
</BrowserRouter>
);

export default Routes;