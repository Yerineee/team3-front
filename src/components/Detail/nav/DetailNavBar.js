import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import back from "../../../assets/icon/Detail/back.png";
import like from "../../../assets/icon/Detail/like.png";
import additional from "../../../assets/icon/Detail/additional.png";

const DetailNavBar = () => {
  return (
    <Div>
      <Link to={`/main/novels`}>
        <BtnSection>
          <BackBtn src={back} />
        </BtnSection>
      </Link>
      <BtnSection>
        <LikeBtn src={like} />
        <AdditionalBtn src={additional} />
      </BtnSection>
    </Div>
  );
};

export default DetailNavBar;

const Div = styled.div`
  position: relative;
  top: -210px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 64px;
`;

const BtnSection = styled.div`
  display: flex;
  align-items: center;
`;

// 상단의 뒤로 가기 버튼
const BackBtn = styled.img`
  width: 10px;
  height: 18px;

  margin: 12px 12px 12px 24px;
`;

// 상단의 관심 버튼
const LikeBtn = styled.img`
  width: 22px;
  height: 22px;

  margin: 12px;
`;

// 상단의 더보기 버튼
const AdditionalBtn = styled.img`
  width: 3.81px;
  height: 21.91px;

  margin: 12px 24px 12px 12px;
`;
