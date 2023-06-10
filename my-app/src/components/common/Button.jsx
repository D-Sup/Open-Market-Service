import styled from 'styled-components';

export function GreenLongerBtn({ content }) {
  return <GreenLongerBtnStyle>{content}</GreenLongerBtnStyle>;
}

const GreenLongerBtnStyle = styled.button`
  width: 416px;
  height: 60px;
  background: #21bf48;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;


export function DarkShorterBtn({ content, onClick='' }) {
  return <DarkShorterBtnStyle onClick={onClick}>{content}</DarkShorterBtnStyle>;
}

const DarkShorterBtnStyle = styled.button`
  float:right;
  width: 200px;
  height: 60px;
  background: #767676;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;

export function DisabledLongerBtn({ content }) {
  return <DisabledLongerBtnStyle>{content}</DisabledLongerBtnStyle>;
}

const DisabledLongerBtnStyle = styled.button`
  width: 416px;
  height: 60px;
  background: #C4C4C4;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;

export function DisabledShorterBtn({ content }) {
  return <DisabledShorterBtnStyle>{content}</DisabledShorterBtnStyle>;
}

const DisabledShorterBtnStyle = styled.button`
  float:right;
  width: 200px;
  height: 60px;
  background: #C4C4C4;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 700;
  font-size: 18px;
`;

export function GreenXShorterBtn({ content }) {
  return <GreenXShorterBtnStyle>{content}</GreenXShorterBtnStyle>;
}

const GreenXShorterBtnStyle = styled.button`
  width: 100px;
  height: 40px;
  background: #21bf48;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
`;

export function WhiteXShorterBtn({ content, onClick }) {
  return <WhiteXShorterBtnStyle onClick={onClick}>{content}</WhiteXShorterBtnStyle>;
}

const WhiteXShorterBtnStyle = styled.button`
  width: 100px;
  height: 40px;
  background: #fff;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
  color: #767676;
  font-weight: 400;
  font-size: 16px;
`;