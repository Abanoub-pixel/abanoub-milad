import React, { Component } from "react";

const generateStyle = (color, isSelected) => {
  const selectedColorStyle = {
    transform: "scale(1.8)",
  };

  const basicStyle = {
    backgroundColor: color,
    width: "30px",
    height: "30px",
    border: "1px solid black",
    borderRadius: "50%",
    outline: "1px solid black",
    outlineOffset: "2px",
  };

  return Object.assign({}, basicStyle, isSelected ? selectedColorStyle : {});
};
class Colors extends Component {
  render() {
    const {
      colors,
      selectedColor,
      onSelectColor,
      disableSelection = false,
    } = this.props;
    return (
      <>
        <p className="color">COLOR:</p>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          {colors?.map((color, index) => (
            <div
              disabled={disableSelection}
              style={generateStyle(color.value, color.value === selectedColor)}
              onClick={() => onSelectColor?.(color.value)}
              key={index}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Colors;
