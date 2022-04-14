import styled from "styled-components";

export const CartStyle = styled.div`
  .details {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 50px 0;
  }
  .left-cart{
    flex-direction: column;
    display: flex;
    justify-content: space-between;

  }
  
  .details .left-cart {
    max-width: 500px;
    min-width: 320px;
  
  }
  .details .left-cart h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 27px;
    color: #1d1f22;
  }

  .left-cart .size {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    color: #1d1f22;
  }
  .left-cart .price {
    font-family: "Roboto Condensed";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
  }
  .left-cart span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
  }
  .left-cart .sizes button {
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
  .left-cart .sizes button:hover {
    background: #1d1f22;
    color: #ffffff;
  }
  .left-cart p {
    line-height: 1.5;
    margin: 15px 0;
  }

.right-cart{
    display:flex;
}
.right-cart .btn{
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
}

.btn .plus,
.minus{
    width: 45px;
    height: 45px;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid #1D1F22;;
   
}
.btn .num{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    background: #fff;
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
 
}
.btn .minus span{
   display: flex;
   width: 15px;
   height: 1px;
   background: #1D1F22; 
}
.btn .plus span:nth-child(1){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    width: 15px;
    height: 1px;
    background: #1D1F22;

}
.btn .plus span:nth-child(2){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    width: 1px;
    height: 15px;
    background: #1D1F22;

}
.details img {
    width: 141px;                      
    height: 185px;
    display: block;
    object-fit: cover;

  }


  @media (max-width: 650px) {
    .box {
      padding-right: 95px;
    }
  }
`;
