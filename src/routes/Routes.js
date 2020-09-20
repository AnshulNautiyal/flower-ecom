import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignInParent } from "./../pages/signIn";
import { SignUpParent } from "./../pages/signUp";
import Home from "./../pages/home";
import Plp from "./../pages/plp";
import { Page404 } from "./../pages/404page";

export const Routes = () => {
  return (
    <BrowserRouter basename="/flower/client/">
      <Switch>
        <Route exact path="/signup" component={SignUpParent} />
        <Route exact path="/signin" component={SignInParent} />
        <Route exact path="/" component={Home} />
        <Route exact path="/c/:id" component={Plp} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};
