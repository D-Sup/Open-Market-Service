import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import IconSwiperLeft from '../../assets/icon-swiper-1.svg';
import IconSwiperRight from '../../assets/icon-swiper-2.svg';

export default function Slider({ posts, loading }) {
  const [translateXValue, setTranslateXValue] = useState(0);

  const handleSwiperLeftClick = () => {
    translateXValue === 0 ? setTranslateXValue(-1400) : setTranslateXValue(translateXValue + 100);
  };

  const handleSwiperRightClick = () => {
    translateXValue === -1400 ? setTranslateXValue(0) : setTranslateXValue(translateXValue - 100);
  };

  useEffect(() => {
    const timer = setTimeout(handleSwiperRightClick, 2000);
    return () => clearTimeout(timer);
  }, [translateXValue]);

  return (
    <>
      {loading && (
        <SliderStyle>
          <button className="swiper-left" onClick={handleSwiperLeftClick}>
            <img src={IconSwiperLeft} alt="" />
          </button>
          <ul style={{ transform: `translateX(${translateXValue}vw)` }}>
            {[...posts].reverse().map((item, index) => (
              <li key={index}>
                <div className="image-overlay"></div>
                <img src={item.image} alt="" />
              </li>
            ))}
          </ul>
          <button className="swiper-right" onClick={handleSwiperRightClick}>
            <img src={IconSwiperRight} alt="" />
          </button>
        </SliderStyle>
      )}
    </>
  );
}

const SliderStyle = styled.div`
  position: relative;
  overflow: hidden;
  height: 500px; 

  button {
    background: none;
    img {
      width: 100%;
      height: 100%;
    }
  }

  ul {
    display: flex;
    transition: 1s;
    height: 100%; 

    li {
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3); 
        z-index: 1;
      }

      img {
        object-fit: cover;
        width: 100vw;
        height: 100%; 
        z-index: 0;
      }
    }
  }

  .swiper-left,
  .swiper-right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .swiper-left {
    left: 50px;
  }

  .swiper-right {
    right: 50px;
  }
`;
