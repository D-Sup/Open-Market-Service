import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from "./AppContext";
import styled from 'styled-components';
import Logo from '../../assets/Logo-hodu.png';

export default function Login() {
  const { setIsLogin } = useContext(AppContext);
  const [selectedButton, setSelectedButton] = useState('BUYER');
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [submit, setSubmit] = useState({ selectedButton: '', id: '', pw: '' });
  const [alertMsg, setAlertMsg] = useState('');
  const navigate = useNavigate();

  async function req(loginData) {
    const response = await fetch('https://openmarket.weniv.co.kr/accounts/login/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    const json = await response.json();
    console.log(json);
    const token = json['token'];
    localStorage.setItem('token', token);
    if (token) {
      setIsLogin(true);
      navigate('/');
    } else {
      setAlertMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
    }
  }

  useEffect(() => {
    if (submit.id && submit.pw) {
      req({
        username: submit.id,
        password: submit.pw,
        login_type: submit.selectedButton,
      });
    } else if (submit.id === '' && submit.pw) {
      setAlertMsg('아이디를 입력해 주세요.');
    } else if (submit.id && submit.pw === '') {
      setAlertMsg('비밀번호를 입력해 주세요.');
    }
  }, [submit]);

  const handleSubmit = e => {
    e.preventDefault();
    setSubmit({ selectedButton, id, pw });
  };

  return (
    <LoginStyle>
      <a href={undefined} onClick={()=>navigate('/')}>
        <img src={Logo} alt="" />
      </a>
      <ul className="navbar">
        <li className={selectedButton === 'BUYER' ? 'active' : ''}>
          <button
            className={selectedButton === 'BUYER' ? 'active-buyer-btn buyer-btn' : 'buyer-btn'}
            onClick={() => setSelectedButton('BUYER')}
          >
            구매회원 로그인
          </button>
        </li>
        <li className={selectedButton === 'SELLER' ? 'active' : ''}>
          <button
            className={selectedButton === 'SELLER' ? 'active-seller-btn seller-btn' : 'seller-btn'}
            onClick={() => setSelectedButton('SELLER')}
          >
            판매회원 로그인
          </button>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <label htmlFor="id" className="a11y-hidden">
            아이디:
          </label>
          <input type="text" id="id" value={id} placeholder="아이디" onChange={event => setId(event.target.value)} />
          <span className="underline"></span>
        </div>
        <div className="wrapper">
          <label htmlFor="pw" className="a11y-hidden">
            비밀번호:
          </label>
          <input
            type="password"
            id="pw"
            value={pw}
            placeholder="비밀번호"
            onChange={event => setPw(event.target.value)}
          />
          <span className="underline"></span>
        </div>
        {alertMsg && <span className="alert-msg">{alertMsg}</span>}
        <button className="login-btn" type="submit">
          로그인
        </button>
      </form>
    </LoginStyle>
  );
}

const LoginStyle = styled.div`
  text-align: center;

  img {
    width: 238px;
    height: 74px;
    margin: 100px 0 70px;
  }

  li {
    display: inline-block;
  }

  .buyer-btn,
  .seller-btn {
    font-weight: bold;
    border: 1px solid #c4c4c4;
    border-bottom: none;
    width: 275px;
    height: 68px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  .active-buyer-btn {
    border-right: none;
    background-color: #fff;
  }
  .active-seller-btn {
    border-left: none;
    background-color: #fff;
  }
  .active {
    background-color: #fff;
    position: relative;
    z-index: 999;
  }

  form {
    position: relative;
    margin: -8px auto;
    width: 550px;
    padding: 35px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: #fff;
    border: 1px solid #c4c4c4;

    .wrapper {
      position: relative;
    }

    .wrapper + .wrapper {
      margin: 6px 0 36px;
    }

    input {
      width: 480px;
      height: 60px;
      outline: none;
      font-size: 1em;
      box-sizing: border-box;
      padding-bottom: 5px;
      border-bottom: 1px solid #c4c4c4;

      &:focus + .underline {
        width: 100.5%;
      }
    }

    .underline {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      width: 0;
      background-color: orange;
      transition: 0.5s;
    }

    .login-btn {
      width: 480px;
      height: 60px;
      color: #fff;
      font-weight: bold;
      background: #21bf48;
      border-radius: 5px;
    }

    .alert-msg {
      display: block;
      color: #eb5757;
      padding-bottom: 26px;
    }
  }
`;
