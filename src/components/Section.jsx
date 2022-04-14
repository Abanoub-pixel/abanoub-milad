import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Details from "./section/Details";
import Cart from "./section/Cart";
import Products from "./section/Products";
import "./css/section.css";
export class Section extends Component {
  render() {
    return (
      <section>
        {/* <Route component={Products} /> */}
        <Route path="/products/:cat" component={Products} exact />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart/:id" component={Cart} />
        <Redirect to="/products/all" />
      </section>
    );
  }
}

export default Section;
