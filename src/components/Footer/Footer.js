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
  width: 100%;
  height: 80px;
  left: calc(50% - 390px / 2 + 0.5px);
  top: 6144px;

  background: #ffffff;
`;

const Line = styled.div`
  width: 358px;
  height: 1.05px;
  background-color: #d0d0d0;
  margin-left: 16px;
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
