import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ContextProvider from "./context/Context";

// navbar
import NavBar from "./components/NavBar";

// pages
import Home from "./pages/Orders";
import Products from "./pages/Products";

const Router = () => (
  <BrowserRouter>
    <ContextProvider>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
    </ContextProvider>
  </BrowserRouter>
);

export default Router;
