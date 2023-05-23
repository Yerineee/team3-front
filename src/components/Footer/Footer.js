import styled from "styled-components";
import line from "../../assets/icon/line.png";

const Footer = () => {
  return (
    <Div>
      <Line src={line}></Line>
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

const Line = styled.img`
  margin-left: 17px;
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
