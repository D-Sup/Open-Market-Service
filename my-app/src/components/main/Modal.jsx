import styled from "styled-components"
import { Link } from 'react-router-dom';
import { GreenXShorterBtn, WhiteXShorterBtn } from "../common/Button"
import IconDelete from '../../assets/icon-delete.svg'

export default function Modal({ setModal }) {
  return (
    <ModalStyle>    
    <p>이미 장바구니에 있는 상품입니다.<br/>
    장바구니로 이동하시겠습니까?</p>
    <img src={IconDelete} alt="" onClick={()=>setModal(false)}/>
    <div>
    <WhiteXShorterBtn content={'아니요'} onClick={()=>setModal(false)}/>
    <Link to='/shopping-cart/' ><GreenXShorterBtn content={'예'} /></Link>
    </div>
    </ModalStyle>
  )
}

const ModalStyle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border: 1px solid #C4C4C4;
  padding: 50px 70px;

  p {
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 30px;
  }

  img {
    cursor: pointer;
    position: absolute;
    top: 22px;
    right: 22px;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
`;




