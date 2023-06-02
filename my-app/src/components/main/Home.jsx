import React, { useState } from 'react';
import Posts from './Posts';
import Slider from './Slider';
import Header from '../header/Header';
import styled from 'styled-components';

export default function Home({ isLogin, setIsLogin }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleLogout() {
    localStorage.clear();
    setIsLogin(false);
  }

  return (
    <MainStyle>
      <Header isLogin={isLogin} handleLogout={handleLogout} />
      <Slider posts={posts} loading={loading} />
      <Posts posts={posts} setPosts={setPosts} loading={loading} setLoading={setLoading} />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  margin: auto;
`;
