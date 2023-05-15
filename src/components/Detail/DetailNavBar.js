import styled from "styled-components";

// icon
import back from "../../assets/icon/DetailNavBar/back.png";
import like from "../../assets/icon/DetailNavBar/like.png";
import additional from "../../assets/icon/DetailNavBar/additional.png";

const DetailNavBar = () => {
  return (
    <Div>
      <BackBtn src={back} />
      <RightBtns>
        <LikeBtn src={like} />
        <AdditionalBtn src={additional} />
      </RightBtns>
    </Div>
  );
};

export default DetailNavBar;

const Div = styled.div`
  position: relative;
  top: -210px;

  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;
`;

// 상단의 뒤로 가기 버튼
const BackBtn = styled.img`
  position: absolute;
  left: 0px;

  box-sizing: border-box;
  width: 10px;
  height: 18px;

  margin: 12px;
`;

const RightBtns = styled.div`
  position: absolute;
  right: 0px;
`;

// 상단의 관심 버튼
const LikeBtn = styled.img`
  position: relative;

  box-sizing: border-box;
  width: 22px;
  height: 22px;

  margin: 12px;
`;

// 상단의 더보기 버튼
const AdditionalBtn = styled.img`
  position: relative;

  box-sizing: border-box;
  width: 3.81px;
  height: 21.91px;

  margin: 12px;
`;
