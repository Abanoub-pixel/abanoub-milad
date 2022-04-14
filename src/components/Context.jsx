import React, { Component, createContext } from "react";

export const DataContext = createContext();
export class DataProvider extends Component {
  state = {
    cart: [],
    currency: undefined,
  };

  componentDidMount() {
    this.getTotal();
  }

  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.cart !== this.state.cart) this.getTotal();
  }

  decrement = (id) => {
    const { cart } = this.state;
    const updatedCart = cart.map((item) => {
      if (item.id === id && item?.count > 1) {
        return { ...item, count: item.count - 1 };
      }
      return item;
    });
    this.setState({ cart: updatedCart });
  };
  increment = (id) => {
    const { cart } = this.state;
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    this.setState({ cart: updatedCart });
  };

  getTotal = () => {
    const { cart } = this.state;
    const res = cart.reduce((prev, item) => {
      const price =
        item.prices?.find(
          ({ currency: { label } }) => label === this.state.currency
        ) || item.prices?.[0];
      return prev + item.count * price.amount;
    }, 0);
    this.setState({ total: res });
  };

  addCart = (product, size) => {
    const { cart } = this.state;
    const id = Date.now();

    this.setState({ cart: [...cart, { ...product, size, count: 1, id }] });
  };

  setCurrency = (currency) => {
    this.setState({ currency });
  };

  render() {
    const { cart, total, currency } = this.state;
    const { addCart, decrement, increment, getTotal, setCurrency } = this;
    return (
      <DataContext.Provider
        value={{
          addCart,
          cart,
          decrement,
          increment,
          total,
          getTotal,
          currency,
          setCurrency,
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
