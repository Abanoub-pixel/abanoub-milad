import styled from "styled-components";

export const ProductsStyle = styled.div`
  h1 {
    font-weight: 400;
    font-size: 42px;
    line-height: 160%;
    color: #1d1f22;
    padding-left: 60px;
  }
  .product {
    width: 101%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .card {
    min-width: 300px;
    min-height: 350px;
    overflow: hidden;
    box-shadow: none;
    transition: 0.5s linear;
    transform: scale(1);
    padding-top: 15px;
  }
  .card:hover {
    box-shadow: 2px 8px 20px #ddd;
    .carty {
      opacity: 100%;
      transition: 0.5s linear;
    }
  }

  .card img:hover {
  }
  .card img {
    max-width: 300px;
    max-height: 245px;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: 0.2s linear;
    transform: scale(0.9);
  }
  .card .sold {
    opacity: 0.3;
  }
  .out-of-stock {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 160%;
    color: #8d8f9a;
    padding-top: 140px;
    padding-left: 90px;
  }

  .card h3 {
    text-transform: uppercase;
    margin: 19px 0px 0px 17px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 160%;
    color: #1d1f22;
  }
  .card h3:nth-child(2) {
    font-weight: 500;
    margin: 3px 17px;
  }
  .card h3 a {
    text-decoration: none;
    color: #333;
  }
  .card h3 a:hover {
    color: crimson;
  }

  .carty {
    opacity: 0;
    position: absolute;
    top: 222px;
    left: 223px;
  }
`;
