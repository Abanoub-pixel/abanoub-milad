import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Context";
import { ProductsStyle } from "./ProductsStyle";
import { withApollo } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
import Colors from "./Colors";
import { CustomIcon } from "./Svgs";
export class Products extends Component {
  static contextType = DataContext;

  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  query() {
    return gql`
  query myDynamicQuery   {
category(input: { title: "${this.props.match.params.cat}" }) {
name
products {
  gallery
  id
  name
  prices{currency{
    label
    symbol}
    amount}
  inStock
  description
  attributes {id, type, items{displayValue, value, id}} 
}
}
}
`;
  }
  componentWillMount() {
    this.props.client
      .query({ query: this.query() })
      .then((data) => this.setState({ data }));
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.cat !== this.props.match.params.cat) {
      this.props.client
        .query({ query: this.query() })
        .then((data) => this.setState({ data }));
    }
  }

  render() {
    const products = this.state.data.data?.category?.products;
    const category = this.state.data.data?.category?.name;
    const { currency } = this.context;

    return (
      <ProductsStyle>
        <>
          <h1>{category}</h1>
          <div className="product">
            {(products || []).map((product) => {
              const price =
                product.prices.find(
                  ({ currency: { label } }) => label === currency
                ) || product.prices[0];
              const colors =
                product.attributes.find((a) => a.type === "swatch")?.items ||
                [];
              // const oneColor = (product.attributes || []).find(
              //   (attr) => attr.type === "swatch"
              // )?.items;
              // console.log(oneColor);
              return (
                <div className="card" key={product.id}>
                  {!product.inStock && (
                    <div
                      className="out-of-stock"
                      style={{
                        height: "100%",
                        width: "100%",
                        zIndex: "1000",
                        backgroundColor: "rgb(31 23 23 / 17%)",
                        position: "absolute",
                        display: "inline",
                      }}
                    >
                      Out of stock
                    </div>
                  )}
                  <Link to={`/product/${product.id}`}>
                    <img src={product.gallery[0]} alt="" />
                  </Link>
                  <div className="content">
                    <h3>{product.name}</h3>
                    <h3>{`${price.currency.symbol} ${price.amount}`}.00</h3>
                    <div
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        gap: "8px",
                        position: "absolute",
                        right: "54px",
                        bottom: "18px",
                      }}
                    >
                      <Colors colors={colors} />
                    </div>
                    {product.inStock && (
                      <Link className="carty" to={`/product/${product.id}`}>
                        <CustomIcon />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      </ProductsStyle>
    );
  }
}

export default withApollo(Products);
