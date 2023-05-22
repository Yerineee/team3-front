import { useState } from "react";
import styled from "styled-components";

// icons
import score from "../../assets/icon/Detail/score.png";
import comment from "../../assets/icon/Detail/comment.png";
import open from "../../assets/icon/Detail/open.png";

// components
import HashtagList from "./HashtagList";

// 작품 정보
const ContentInfo = ({ details }) => {
  const [isShow, setIsShow] = useState(false); // 긴 설명 보여주는지

  return (
    <Div>
      <TopSection>
        <CoverImg src={details[0]?.imageUrl} alt="커버 이미지" />
        <Wrapper>
          <HashtagList hashtags={details[0]?.hashtags} />
          <BtnSection>
            <BtnWrapper>
              <BtnImg src={score} />
              <BtnText>{details[0]?.rating}</BtnText>
            </BtnWrapper>
            <BtnWrapper>
              <BtnImg src={comment} />
              <BtnText>{details[0]?.commentCount}</BtnText>
            </BtnWrapper>
          </BtnSection>
        </Wrapper>
      </TopSection>

      <Wrapper>
        <ContentTitle>{details[0]?.title}</ContentTitle>
        <ContentMainInfo>
          {details[0]?.genre}·{details[0]?.author}
        </ContentMainInfo>
        <DescriptionSection>
          {isShow ? (
            <Description>{details[0]?.longDescription}</Description>
          ) : (
            <Description>{details[0]?.shortDescription}</Description>
          )}
          <OpenBtn src={open} onClick={() => setIsShow(!isShow)} />
        </DescriptionSection>
      </Wrapper>
    </Div>
  );
};

export default ContentInfo;

const Div = styled.div`
  position: relative;
  top: -214px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

// 상단 섹션 (작품 제목 위의 섹션)
const TopSection = styled.div`
  display: flex;
  justify-content: center;
`;

// 평점 및 댓글 버튼 섹션
const BtnSection = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0px 24px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

// 작품의 커버 이미지
const CoverImg = styled.img`
  width: 146px;
  height: 208px;

  border-radius: 3px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

// 버튼 Wrapper
const BtnWrapper = styled.div`
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

// 작품 제목
const ContentTitle = styled.p`
  font-family: "Noto Sans KR Bold";
  font-size: 18px;

  margin: 32px 0px 14px 0px;
`;

// 작품 핵심 정보 (장르, 작가 등)
const ContentMainInfo = styled.p`
  font-family: "Noto Sans KR Regular";
  font-size: 13px;

  margin: 0px 0px 4px 0px;
`;

// 작품 설명 섹션
const DescriptionSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

// 작품 설명 내용
const Description = styled.p`
  width: 273px;
  font-family: "Noto Sans KR Regular";
  font-size: 13px;
  color: #949494;

  margin: 12px 0px 24px 0px;
`;

// 작품 설명 및 공지 우측 화살표 버튼
const OpenBtn = styled.img`
  width: 44px;
  height: 44px;

  margin-right: 6px;
`;
