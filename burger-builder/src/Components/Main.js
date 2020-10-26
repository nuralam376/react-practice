import React from "react";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder/BurgerBuilder";
import Header from "./BurgerBuilder/Header/Header";
import { Route, Switch } from "react-router-dom";
import Orders from "./BurgerBuilder/Orders/Orders";
import Checkout from "./BurgerBuilder/Checkout/Checkout";

const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={BurgerBuilder} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
};

export default Main;
