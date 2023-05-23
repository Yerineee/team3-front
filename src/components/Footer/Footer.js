import styled from "styled-components";

const Footer = () => {
  return (
    <Div>
      <Line></Line>
      <FooterText>ⓒ NAVER WEBTOON Limited</FooterText>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  width: 390px;
  height: 80px;
  margin-left: calc(50% - 390px / 2);

  background: #ffffff;
`;

const Line = styled.div`
  width: 358px;
  height: 1.05px;
  margin-left: 16px;
  margin-top: 1.05px;

  border: 1px solid #d0d0d0;
  transform: rotate(-0.17deg);
`;

const FooterText = styled.p`
  width: 148px;
  height: 12px;
  margin-left: 32px;
  margin-top: 9.55px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 13px;

  color: #9c9c9c;
`;
