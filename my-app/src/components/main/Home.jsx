import React, { useState } from 'react';
import Posts from './Posts';
import Slider from './Slider';
import Header from '../header/Header';
import styled from 'styled-components';

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <MainStyle>
      <Header />
      <Slider loading={loading} />
      <Posts loading={loading} setLoading={setLoading} />
    </MainStyle>
  );
}

const MainStyle = styled.main`
  margin: auto;
`;
