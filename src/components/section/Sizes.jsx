import React, { Component } from "react";

const selectedSizeStyle = {
  color: "white",
  backgroundColor: "black",
};
class Sizes extends Component {
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
