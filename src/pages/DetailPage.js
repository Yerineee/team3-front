import styled from "styled-components";

// components
import DetailNavBar from "../components/Detail/DetailNavBar";

const DetailPage = () => {
  return (
    <Div>
      <CoverBackground />
      <DetailNavBar />
    </Div>
  );
};

export default DetailPage;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

// 배경 색상은 임의로 설정했습니다.
const CoverBackground = styled.div`
  position: relative;
  background-color: #c6eb91;
  width: 100%;
  height: 210px;
  z-index: -1;
`;
