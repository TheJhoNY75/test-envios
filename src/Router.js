import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// navbar
import NavBar from './components/NavBar'

// pages
import Home from './pages/Home'

const Router = () => (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Router;