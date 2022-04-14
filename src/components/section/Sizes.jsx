import React, { Component } from "react";
import { DataContext } from "../Context";

const selectedSizeStyle = {
  color: "white",
  backgroundColor: "black",
};
class Sizes extends Component {
  static contextType = DataContext;

  render() {
    const {
      sizes,
      selectedSize,
      onSelectSize,
      disableSelection = false,
    } = this.props;
    return (
      <>
        <p className="size">SIZE:</p>
        <div className="sizes">
          {sizes?.map((size, index) => (
            <button
              disabled={disableSelection}
              style={size.value === selectedSize ? selectedSizeStyle : {}}
              onClick={() => onSelectSize?.(size.value)}
              key={index}
            >
              {size.value}
            </button>
          ))}
        </div>
      </>
    );
  }
}

export default Sizes;
