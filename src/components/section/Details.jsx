import React, { Component } from "react";
import { DataContext } from "../Context";
import { Link } from "react-router-dom";
import Sizes from "./Sizes";
import ColorSelector from "./ColorSelector";
import { DetailsStyle } from "./DetailsStyle";
import { withApollo } from "@apollo/client/react/hoc";
import { gql } from "@apollo/client";
class Details extends Component {
  static contextType = DataContext;

  state = {
    product: {},
    loading: true,
    selectedSize: undefined,
    selectedColor: undefined,
  };
  componentWillMount() {
    const query = gql`
           query myDynamicQuery   {
      product(id: "${this.props.match.params.id}"){
        id
        name
        inStock
        gallery
        description
        category
        attributes{id, name, type,items{id, value, displayValue}}
        brand
        prices {
          currency{label, symbol} amount
          }
        
      }
    }
         `;

    this.props.client
      .query({ query })
      .then((data) =>
        this.setState({ product: data.data.product, loading: false })
      );
  }

  render() {
    const { product, selectedSize, selectedColor } = this.state;
    const sizes = (product.attributes || []).find(
      (attr) => attr.id === "Size"
    )?.items;
    const colors = (product.attributes || []).find(
      (attr) => attr.id === "Color"
    )?.items;
    const { currency } = this.context;
    const price =
      product.prices?.find(({ currency: { label } }) => label === currency) ||
      product.prices?.[0];

    return this.state.loading ? null : (
      <DetailsStyle>
        <>
          {
            <div className="details">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {product.gallery.map((string) => (
                  <img key={string} className="left-imgs" src={string} alt="" />
                ))}
              </div>
              <img className="main-img" src={product.gallery[0]} alt="" />
              <div className="box">
                <h2 className="item-title">{product.name}</h2>
                <Sizes
                  sizes={sizes}
                  onSelectSize={(selectedSize) =>
                    this.setState({ selectedSize })
                  }
                  selectedSize={this.state.selectedSize}
                />
                <ColorSelector
                  colors={colors}
                  onSelectColor={(selectedColor) =>
                    this.setState({ selectedColor })
                  }
                  selectedColor={this.state.selectedColor}
                />
                <h3 className="price">PRICE:</h3>
                <span>{`${price.currency.symbol} ${price.amount}`}.00</span>
                <br />
                <br />
                <Link
                  to={`/cart/${this.props.match.params.id}`}
                  className="cart"
                >
                  <button
                    disabled={
                      (sizes && !selectedSize) || (colors && !selectedColor)
                    }
                    onClick={() => {
                      this.context.addCart(
                        product,
                        selectedSize,
                        selectedColor
                      );
                    }}
                  >
                    ADD TO CART
                  </button>
                </Link>

                <div
                  id="desc"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
              </div>
            </div>
          }
        </>
      </DetailsStyle>
    );
  }
}

export default withApollo(Details);
