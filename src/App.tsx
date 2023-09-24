import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom"

import Login from './components/loginFlow/login'
import Home from './components/Home/index'


import './App.css';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/NotFound';
import ProductsSection from './components/ProductsSection/MainProductsSection';
import ProductDetails from './components/ProductsSection/ProductDetails';
import MainCartView from './components/Cart/MainCartView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/products" component={ProductsSection} />
        <ProtectedRoute path="/not-found" component={NotFound} />
        <ProtectedRoute path="/products/:id" component={ProductDetails} />
        <ProtectedRoute path="/cart" component={MainCartView} />
        <Redirect to="/not-found" />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
