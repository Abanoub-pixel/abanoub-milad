import styled from 'styled-components'
export const MyBagStyle = styled.div`

.add-to-cart{
   width: 325px;
   height: 32%;
   left:72%;
  top:10%;
  position: absolute;
  background: #FFFFFF;
  z-index: 1;
  
}

.my-bag{

  /* width: 325px; */
  padding:10px 20px;
  height: 100%;
  background: #FFFFFF;
  
}
.add-to-cart .items{
  color: #1D1F22;
  width: 118px;
  height: 26px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  margin-left: 20px;

}
 .details{
    display: flex;
}
.my-bag p {
  display: flex
}
.details .left-cart{
    flex-direction: column;
    display: flex;
    justify-content: space-between;
   

  }
  
  .details .left-cart h2 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25.6px;
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
  .left-cart .item-title{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 52px;
    color:  #1D1F22;
  }
  .left-cart .item-price {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 25.6px;
  }
  .left-cart span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
  }
  .left-cart .sizes button {
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: 1px solid #1d1f22;
    box-sizing: border-box;
    margin-right: 12px;
    cursor: pointer;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22.4px;
  }
  .left-cart .sizes button:hover {
    background: #1d1f22;
    color: #ffffff;
  }
  .left-cart p {
    line-height: 25.6;
    margin: 15px 0;
  }

.right-cart{
    display:flex;
   
}
.right-cart .btn{
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  padding-left: 65px;
  
}

.btn .plus,
.minus{
    width: 24px;
    height: 24px;
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
    height: 26px;
    background: #fff;
    color: #1D1F22;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
 
}
.btn .minus span{
   display: flex;
   width: 8px;
   height: 1px;
   background: #1D1F22; 
}
.btn .plus span:nth-child(1){
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    width: 8px;
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
    height: 8px;
    background: #1D1F22;

}
.details img {
    width: 105px;                      
    height: 137px;
    display: block;
    object-fit: cover;
  }
.total{
  display: flex;
  justify-content: space-between;
  padding-top: 42px;
  padding-bottom: 35px;
  padding-left: 19px;
  padding-right: 8px;
  background: #FFFFFF;
}
.total .price{
  padding-right: 13px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
}
.btn {
  display: flex;
  justify-content: space-between;
  padding-right: 13px;
  padding-left: 19px;
  background: #FFFFFF;
}

.btn button:nth-child(1){
  border: 1px solid #1D1F22;
  font-family: raleway;
  background: #FFFFFF;
  color: #1D1F22;
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 43px;
  cursor: pointer;
}

.btn button:nth-child(2){
  font-family: raleway;
  background: #5ECE7B;
  color: #FFFFFF;
  text-decoration: none;
  display: inline-block;
  width: 140px;
  height: 43px;
  border: none;
  cursor: pointer;
  
}

.total .tot {
  color: #1D1F22;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
}

  @media (max-width: 650px) {
    .box {
      padding-right: 95px;
    }
  }
`