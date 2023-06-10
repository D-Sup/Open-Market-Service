import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../header/Header';
import Modal from './Modal';
import styled from 'styled-components';
import { PostShoppingCart } from '../API/PostShoppingCart';
import IconPlus from '../../assets/icon-plus-line.svg';
import IconMinus from '../../assets/icon-minus-line.svg';
import { GreenLongerBtn, DarkShorterBtn, DisabledLongerBtn, DisabledShorterBtn } from '../common/Button';

export default function ProductDetails() {
  const location = useLocation();
  const item = location.state?.item;
  const [buyCount, setBuyCount] = useState(0);
  const [modal, setModal] = useState(false);

  function BuyCountPlus() {
    item.stock === buyCount ? setBuyCount(item.stock) : setBuyCount((prevNum) => prevNum + 1)
  }

  function BuyCountMinus() {
    buyCount === 0 ? setBuyCount(0) : setBuyCount((prevNum) => prevNum - 1)
  }

  async function GoToShoppingCart() {
    const shoppingData = {
      product_id: item.product_id,
      quantity: buyCount,
      check: 'false'
    };
    const result = await PostShoppingCart(shoppingData);
  console.log(result)
    result.quantity > 1 ? setModal(true) : setModal(false)
      
  }

  return (
    <>
      <Header />
      {item && (
        <ProductDetailsStyle>
          <div>
            <ProductImage src={item.image} alt="" />
          </div>
          <div>
            <StoreName>{item.store_name}</StoreName>
            <ProductName>{item.product_name}</ProductName>
            <ProductPrice>
              <strong>{Intl.NumberFormat().format(item.price)}</strong>
              <span>원</span>
            </ProductPrice>
            <ShippingMethod>택배배송 / 무료배송</ShippingMethod>
            <BuyCountStyle>
              <button onClick={BuyCountMinus}>
                <img src={IconMinus} alt="" />
              </button>
              <span>{buyCount}</span>
              <button onClick={BuyCountPlus}>
                <img src={IconPlus} alt="" />
              </button>
            </BuyCountStyle>
            <ProductStock>
              <span>총 상품 금액 <span style={{ color: '#C4C4C4' }}>(구매 시 품절까지 <span style={{ color: '#21BF48' }}>{item.stock - buyCount}</span>개 남음)</span></span>
              <span>
                총 수량 <span style={{ color: '#21BF48' }}>{buyCount}</span>개
                <strong style={{ color: '#21BF48' }}>{Intl.NumberFormat().format(item.price*buyCount)}</strong>원
              </span>
            </ProductStock>
            {item.stock===0 ? <DisabledLongerBtn content={'품절'}/> : <Link to='/shopping-cart/' ><GreenLongerBtn content={'바로 구매'} /></Link>}
            {item.stock===0 ? <DisabledShorterBtn content={'품절'}/> : <DarkShorterBtn content={'장바구니'} onClick={GoToShoppingCart}/>}
            {modal && <Modal setModal={setModal}/>}
          </div>
        </ProductDetailsStyle>
      )}
    </>
  );
}

const ProductPrice = styled.div`
  strong {
    font-weight: 700;
    font-size: 36px;
  }
`;

const BuyCountStyle = styled.div`
  position: relative;
  margin: 30px 0;
  width: 150px;
  height: 50px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  display: flex;

  &:before {
    content: '';
    position: absolute;
    top: -32px;
    display: block;
    width: calc(1280px/2);
    height: 2px;
    background: #c4c4c4;
  }
  &:after {
    content: '';
    position: absolute;
    top: 80px;
    display: block;
    width: calc(1280px/2);
    height: 2px;
    background: #c4c4c4;
  }

  span,
  button {
    width: calc(100% / 3);
    height: 100%;
  }

  span {
    text-align: center;
    padding: 17px 0;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    border-left: 1px solid #c4c4c4;
    border-right: 1px solid #c4c4c4;
  }
  
  button {
    border-radius: 5px;
    background-color: #fff;
  }
`;

const ProductDetailsStyle = styled.div`
  width: 1280px;
  margin: 80px auto;
  display: flex;

  div {
    flex: 1;
  }
`;

const ProductImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
`;

const StoreName = styled.p`
  color: #767676;
  font-weight: 400;
  font-size: 16px;
`;

const ProductName = styled.h2`
  margin: 16px 0 20px;
  font-weight: 400;
  font-size: 36px;
`;

const ProductStock = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 47px 0 30px;

  strong {
    font-weight: 700;
    font-size: 36px;
    &:before {
      content: '|';
      padding: 0 12px;
      color: #c4c4c4;
      font-size: 18px;
    }
  }
`;

const ShippingMethod = styled.div`
  margin-top: 155px;
  padding-bottom: 20px; 
  font-weight: 400;
  font-size: 16px;
  color: #767676;
`;
