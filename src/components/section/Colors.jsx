import React, { Component } from "react";
class Colors extends Component {
  state = {};
  render() {
    const { colors } = this.props;
    return (
      <>
        {colors.map((c) => (
          <div
            key={c.id}
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: c.value,
              border: "1px black solid",
            }}
          ></div>
        ))}
      </>
    );
  }
}

export default Colors;
