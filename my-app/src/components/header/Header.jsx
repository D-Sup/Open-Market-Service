import { Link, useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
import Logo from '../../assets/Logo-hodu.png';
import IconShopping from '../../assets/icon-shopping-cart.svg';
import IconUser from '../../assets/icon-user.svg';
import IconSearch from '../../assets/icon-search.svg';
import styled from 'styled-components';
import { AppContext } from '../main/AppContext';

export default function Header() {

  const { isLogin, setIsLogin } = useContext(AppContext);
  const navigate = useNavigate();
  
  return (
    <HeaderStyle>
      <div className="header-left">
        <img className="logo-img" src={Logo} alt="" onClick={()=>navigate('/')}/>
        <form>
          <label className="a11y-hidden" htmlFor="searchProduct"></label>
          <input type="text" id="searchProduct" placeholder="상품을 검색해보세요!" />
          <button type="submit">
            <img src={IconSearch} alt="Search Icon" />
          </button>
        </form>
      </div>

      <div>
        <Link to='/shopping-cart/' >
          <img src={IconShopping} alt="" />
          <br />
          <span>장바구니</span>
        </Link>
        {isLogin ? (
          <a href={undefined} onClick={()=>{
            setIsLogin(false);
            localStorage.clear();
            }}>
            <img src={IconUser} alt="" />
            <br />  
            <span>로그아웃</span>
          </a>
        ) : (
          <Link to="/login">
            <img src={IconUser} alt="" />
            <br />
            <span>로그인</span>
          </Link>
        )}
      </div>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 22px 0;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);

  .header-left {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .logo-img {
    cursor: pointer;
    width: 124px;
    height: 38px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 400px;
    height: 46px;
    border: 2px solid #21bf48;
    box-sizing: border-box;
    border-radius: 50px;
    padding: 0 22px;

    button {
      background-color: #fff;
    }

    input {
      flex-grow: 1;
      color: #767676;
      font-weight: 400;
      font-size: 16px;
      margin-right: 2px;
    }
  }

  a {
    text-decoration: none;
    text-align: center;
    display: inline-block;
  }

  a + a {
    margin-left: 25px;
  }

  span {
    color: #767676;
    font-weight: 400;
    font-size: 12px;
  }
`;
