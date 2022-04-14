import styled from "styled-components";
export const CurrencyStyle = styled.div`

.currency-box{
  right: 4.5%;
  top: 12%;
  position: absolute;
  box-shadow: 0px 0px 5px 0px #ddd;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: stretch;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 0;
  z-index: 1;
}

.selected-currency {
  background-color:  #3d7ce64a;
}

span  {
cursor: pointer;
padding: 0.5rem 2rem;
}

span:hover {
  background: #3d7ce64a;
}


`