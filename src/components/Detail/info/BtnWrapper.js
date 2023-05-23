import styled from "styled-components";

// icons
import score from "../../../assets/icon/Detail/score.png";
import comment from "../../../assets/icon/Detail/comment.png";

const BtnWrapper = ({ isScore, imgSrc, text }) => {
  return (
    <Div>
      {isScore ? <BtnImg src={score} /> : <BtnImg src={comment} />}
      <BtnText>{text}</BtnText>
    </Div>
  );
};

export default BtnWrapper;

// 버튼 Wrapper
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 버튼 이미지 (점수, 댓글 버튼)
const BtnImg = styled.img`
  width: 20px;
  height: 20px;
  margin: 4px 15px 0px 15px;
`;

// 버튼 텍스트 (점수. 댓글 수)
const BtnText = styled.p`
  margin-top: 4px;
  margin-bottom: 0px;

  font-family: "Noto Sans KR Regular";
  font-size: 16px;
`;
