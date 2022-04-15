import React, { Component } from "react";
import { DataContext } from "../Context";
import { CartStyle } from "./CartStyle";
import Sizes from "./Sizes";

class Cart extends Component {
  static contextType = DataContext;
  state = {
    selectedSize: "S",
  };

  render() {
    const { cart, decrement, increment, currency } = this.context;
    return (
      <CartStyle>
        <>
          <h1>Cart</h1>
          {(cart || []).map((item) => {
            const price =
              item.prices?.find(
                ({ currency: { label } }) => label === currency
              ) || item.prices?.[0];
            const sizes = (item.attributes || []).find(
              (attr) => attr.id === "Size"
            )?.items;
            return (
              <div className="details" key={item.name}>
                <div className="left-cart">
                  <h2 className="item-title">{item.name}</h2>
                  <span>
                    {`${price.currency.symbol} ${(
                      (item.count || 1) * price.amount
                    ).toFixed(2)}`}
                    .00
                  </span>
                  <Sizes
                    sizes={sizes}
                    onSelectSize={(selectedSize) =>
                      this.setState({ selectedSize })
                    }
                    selectedSize={item.size || "S"}
                    disableSelection
                  />
                </div>
                <div className="right-cart">
                  <div className="btn">
                    <span onClick={() => increment(item.id)} className="plus">
                      <span></span>
                      <span></span>
                    </span>
                    <span className="num">{item.count}</span>
                    <span onClick={() => decrement(item.id)} className="minus">
                      <span></span>
                    </span>
                  </div>
                  <img src={item.gallery[0]} alt="" />
                </div>
              </div>
            );
          })}
        </>
      </CartStyle>
    );
  }
}

export default Cart;
