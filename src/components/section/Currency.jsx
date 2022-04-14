import React, { Component } from "react";
import { CurrencyStyle } from "./CurrencyStyle";
import { gql } from "@apollo/client";
import { graphql } from "@apollo/client/react/hoc";
import { DataContext } from "../Context";

const currencyQuery = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;

class Currency extends Component {
  static contextType = DataContext;
  state = {};
  render() {
    const { currency, setCurrency } = this.context;
    const {
      data: { currencies },
    } = this.props;

    return (
      <CurrencyStyle>
        <div className="currency-box">
          {currencies?.map(({ label, symbol }) => (
            <span
              key={label}
              onClick={() => setCurrency(label)}
              className={label === currency ? "selected-currency" : ""}
            >
              {`${symbol} ${label}`}
            </span>
          ))}
        </div>
      </CurrencyStyle>
    );
  }
}

export default graphql(currencyQuery)(Currency);
