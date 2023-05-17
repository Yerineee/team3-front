import styled from "styled-components";

// icons
import score from "../../assets/icon/Detail/score.png";
import comment from "../../assets/icon/Detail/comment.png";

// components
import HashtagList from "./HashtagList";

// 작품 정보
const ContentInfo = ({ details }) => {
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
        <ContentDescription>{details[0]?.shortDescription}</ContentDescription>
      </Wrapper>
    </Div>
  );
};

export default ContentInfo;

const Div = styled.div`
  position: relative;
  top: -214px;

  width: 100%;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: center;
`;

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
`;

// 작품 제목
const ContentTitle = styled.p`
  font-size: 18px;
  font-weight: bold;

  margin: 32px 0px 14px 0px;
`;

// 작품 핵심 정보 (장르, 작가 등)
const ContentMainInfo = styled.p`
  font-size: 13px;
  margin-bottom: 0px 0px 0px 16px;
`;

// 작품 내용 설명
const ContentDescription = styled.p`
  width: 273px;
  font-size: 13px;
  color: #949494;
`;
