import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/xmark-solid.svg";
import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import { HeaderStyle } from "./section/HeaderStyle";
import Currency from "./section/Currency";
import {
  CustomIcon2,
  CustomIcon3,
  CustomIcon4,
} from "../components/section/Svgs";
import MyBag from "./section/MyBag";

class Header extends Component {
  static contextType = DataContext;
  state = {
    currencyExpanded: false,
    bagExpanded: false,
  };
  menuToggle() {
    this.setState({ currencyExpanded: !this.state.currencyExpanded });
  }
  bagToggle() {
    this.setState({ bagExpanded: !this.state.bagExpanded });
  }

  render() {
    const { cart } = this.context;
    return (
      <HeaderStyle>
        {this.state.currencyExpanded && <Currency />}
        {this.state.bagExpanded && <MyBag />}
        <header>
          <div className="menu">
            <img src={Menu} alt="" width="20" />
          </div>

          <nav>
            <ul>
              <li>
                <Link to="/products/all">All</Link>
              </li>
              <li>
                <Link to="/products/tech">Tech</Link>
              </li>
              <li>
                <Link to="/products/clothes">Clothes</Link>
              </li>

              <li className="close" onClick={this.menuToggle}>
                <img src={Close} alt="" width="20" />
              </li>
            </ul>
          </nav>

          <div className="logo">
            <CustomIcon2 />
          </div>

          <div className="nav-cart">
            <span>{cart.length}</span>

            <div className="shop-car">
              <div onClick={this.menuToggle.bind(this)}>
                <CustomIcon3 />
              </div>
              <div className="bag" onClick={this.bagToggle.bind(this)}>
                <CustomIcon4 />
              </div>
            </div>
          </div>
        </header>
      </HeaderStyle>
    );
  }
}

export default Header;
