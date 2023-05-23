import styled from "styled-components";

// icons
import open from "../../../assets/icon/Detail/open.png";
import notice from "../../../assets/icon/Detail/notice.png";

const OpenSection = ({
  isNotice,
  isShow,
  setIsShow,
  shortText,
  longText,
  width,
  color,
}) => {
  return (
    <Div>
      {isNotice && <NoticeImg src={notice} />}
      {isShow ? (
        <OpenText color={color} width={width}>
          {shortText}
        </OpenText>
      ) : (
        <OpenText color={color} width={width}>
          {longText}
        </OpenText>
      )}
      <OpenBtn src={open} onClick={() => setIsShow(!isShow)} />
    </Div>
  );
};

export default OpenSection;

// Open 버튼 섹션 (작품 소개 및 공지사항)
const Div = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 16px;
  margin-left: 16px;
`;

// 작품 설명 내용
const OpenText = styled.p`
  width: ${props => props.width};
  font-family: "Noto Sans KR Regular";
  font-size: 13px;
  color: ${props => props.color};

  align-self: center;
`;

// 작품 설명 및 공지 우측 화살표 버튼
const OpenBtn = styled.img`
  width: 44px;
  height: 44px;

  align-self: flex-start;
`;

const NoticeImg = styled.img`
  width: 14px;
  height: 12px;
  margin-right: 8px;

  align-self: center;
`;
