import styled from "styled-components";

// icons
import back from "../../assets/icon/DetailPage/back.png";
import like from "../../assets/icon/DetailPage/like.png";
import additional from "../../assets/icon/DetailPage/additional.png";

const DetailNavBar = () => {
  return (
    <Div>
      <BtnSection>
        <BackBtn src={back} />
      </BtnSection>
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
  position: absolute;
  left: 16px;

  width: 10px;
  height: 18px;

  margin: 12px;
`;

// 상단의 관심 버튼
const LikeBtn = styled.img`
  position: relative;

  width: 22px;
  height: 22px;

  margin: 12px;
`;

// 상단의 더보기 버튼
const AdditionalBtn = styled.img`
  position: relative;

  width: 3.81px;
  height: 21.91px;

  margin: 12px;
`;
