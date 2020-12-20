import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignInParent } from "./../pages/signIn";
import { SignUpParent } from "./../pages/signUp";
import Home from "./../pages/home";
import Plp from "./../pages/plp";
import Pdp from "./../pages/pdp";
import Cart from "./../pages/Cart";
import Shipping from "./../pages/shipping";
import OrderConfirmation from "./../pages/orderConfirmation/OrderConfirmation";
import { Page404 } from "./../pages/404page";
import { BrowserComponent } from "./../components/BrowserComponent";
import {
  BrowserView,
  MobileView,
} from "react-device-detect";

export const baseUrl = "/flower/client/";
export const Routes = () => {
  return (
    <BrowserRouter basename={baseUrl}>
      <MobileView>
        <Switch>
          <Route exact path="/signup" component={SignUpParent} />
          <Route exact path="/signin" component={SignInParent} />
          <Route exact path="/" component={Home} />
          <Route exact path="/c/:id" component={Plp} />
          <Route exact path="/pdp/:name/:id" component={Pdp} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/shipping" component={Shipping} />
          <Route exact path="/order-confirm" component={OrderConfirmation} />
          <Route component={Page404} />
        </Switch>
      </MobileView>
      <BrowserView>
        <Switch>
          <Route component={BrowserComponent} />
        </Switch>
      </BrowserView>
    </BrowserRouter>
  );
};
