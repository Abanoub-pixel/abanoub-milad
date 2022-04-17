import React, { Component } from "react";
import { DataContext } from "../Context";
import { MyBagStyle } from "./MyBagStyle";
class MyBag extends Component {
  static contextType = DataContext;

  render() {
    const { cart, decrement, increment, total, currency } = this.context;

    return (
      <MyBagStyle>
        <>
          <div className="add-to-cart">
            <p className="items">my bag, {cart.length} items</p>
            {(cart || []).map((item) => {
              const price =
                item.prices?.find(
                  ({ currency: { label } }) => label === currency
                ) || item.prices?.[0];
              return (
                <div className="my-bag" key={item.name}>
                  <div className="details">
                    <div className="left-cart">
                      <h2 className="item-title">{item.name}</h2>
                      <span className="item-price">
                        {`${price.currency.symbol} ${(
                          (item.count || 1) * price.amount
                        ).toFixed(2)}`}
                        .00
                      </span>
                      <div>
                        {item.size && (
                          <div
                            style={{
                              width: "35px",
                              height: "35px",
                              border: "1px solid gray",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <span
                              style={{
                                fontSize: "medium",
                                fontWeight: "500",
                              }}
                            >
                              {item.size}
                            </span>
                          </div>
                        )}
                        {item.color && (
                          <div
                            style={{
                              width: "30px",
                              height: "30px",
                              border: "1px solid black",
                              borderRadius: "50%",
                              outline: "1px solid black",
                              outlineOffset: "2px",
                              backgroundColor: item.color,
                            }}
                          />
                        )}
                      </div>
                    </div>
                    <div className="right-cart">
                      <div className="btn">
                        <span
                          onClick={() => increment(item.id)}
                          className="plus"
                        >
                          <span></span>
                          <span></span>
                        </span>
                        <span className="num">{item.count}</span>
                        <span
                          onClick={() => decrement(item.id)}
                          className="minus"
                        >
                          <span></span>
                        </span>
                      </div>
                      <img src={item.gallery[0]} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <div className="total">
                <p className="tot">Total</p>
                <p className="price">{`${total.toFixed(2)} ${
                  currency || "$"
                }`}</p>
              </div>
              <div className="btn">
                <button>VIEW BAG</button>
                <button>CHECK OUT</button>
              </div>
            </div>
          </div>
        </>
      </MyBagStyle>
    );
  }
}

export default MyBag;
