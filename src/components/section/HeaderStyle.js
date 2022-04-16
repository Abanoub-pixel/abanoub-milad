import styled from "styled-components";
export const HeaderStyle = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    height: 80px;
    padding-bottom: 45px;
    padding-left: 50px;
  }

  header nav {
    display: flex;
    padding-top: 40px;
  }
  nav ul li {
    list-style: none;
    display: inline-block;
  }
  nav ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #1d1f22;
    padding: 15px;
  }
  nav ul li a {
    position: relative;
  }
  nav ul li a::after {
    content: "";
    position: absolute;
    background-color: #5ece7b;
    height: 3px;
    width: 0;
    left: 0px;
    margin-top: 50px;
    transition: 0.5s linear;
  }
  nav ul li a:hover::after {
    width: 100%;
  }
  nav ul li a:hover {
    color: #5ece7b;
  }
  .nav-cart {
    cursor: pointer;
    position: relative;
    padding: 15px;
    margin-top: 40px;
  }
  .logo {
    margin-top: 60px;
  }
  .shop-sign {
    margin-left: 25px;
    margin-bottom: 3px;
  }
  .shop-car {
    display: flex;
  }
  .bag {
    padding-top: 6px;
  }

  .nav-cart span {
    position: absolute;
    right: 7px;
    width: 14.29px;
    height: 14.29px;
    background: #1d1f22;
    font-size: 14px;
    color: #ffffff;
    padding-left: 3px;
    padding-bottom: 20px;
    margin-bottom: 5px;
    border-radius: 50%;
    z-index: 0;
  }

  header .menu,
  header .close {
    cursor: pointer;
    display: none;
  }
  @media (max-width: 650px) {
    header ul {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;
      z-index: 99;
      flex-direction: column;
      opacity: 0.97;
      transition: 0.5s linear;
    }

    header .menu,
    header .close {
      display: block;
    }
  }

  header .close {
    position: absolute;
    top: 10px;
    right: 20px;
  }
  header ul.toggle {
    top: 0;
  }
`;
