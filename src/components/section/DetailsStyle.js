import styled from "styled-components";
export const DetailsStyle = styled.div`
  .details {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;
  }
  .details .left-imgs {
    height: 87.61px;
    display: block;
  }
  .details .main-img {
    height: 370px;
    display: block;
    object-fit: cover;
  }
  .details .box {
    max-width: 500px;
    min-width: 320px;
  }
  .details .box h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1d1f22;
    margin-bottom: 70px;
  }

  .box .size {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #1d1f22;
    margin-bottom: 8px;
  }
  .box .price {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .box span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 18px;
    margin-bottom: 30px;
  }
  .box .sizes button {
    width: 63px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #1d1f22;
    box-sizing: border-box;
    margin-right: 12px;
    cursor: pointer;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
  }
  .box .sizes button:hover {
    background: #1d1f22;
    color: #ffffff;
  }

  #desc {
    margin: 20px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 159.96%;
  }

  #desc ul {
    list-style: none;
  }

  .box .cart button {
    background: #5ece7b;
    color: #ffffff;
    text-decoration: none;
    padding: 14px 95px;
    display: inline-block;
    width: 292px;
    height: 52px;
    border: none;
    cursor: pointer;
  }

  .box .cart button:disabled {
    background: #d3d3d3;
    color: #000000;
  }

  @media (max-width: 650px) {
    .box {
      padding-right: 95px;
    }
  }
`;
