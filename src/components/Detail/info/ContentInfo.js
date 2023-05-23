import { useState } from "react";
import styled from "styled-components";

// components
import HashtagList from "./HashtagList";
import BtnWrapper from "./BtnWrapper";
import OpenSection from "./OpenSection";

// 작품 정보
const ContentInfo = ({ details, hashtags }) => {
  const [isShowDescription, setIsShowDescription] = useState(false); // 긴 설명 보여주는지
  const [isShowNotice, setIsShowNotice] = useState(false); // 긴 공지사항 보여주는지

  return (
    <Div>
      <TopSection>
        <CoverImg src={details.imageUrl} alt="커버 이미지" />
        <Wrapper>
          <HashtagList hashtags={hashtags} />
          <BtnSection>
            <BtnWrapper isScore={true} text={details.rating} />
            <BtnWrapper isScore={false} text={details.commentCount} />
          </BtnSection>
        </Wrapper>
      </TopSection>

      <Wrapper>
        <ContentTitle>{details.title}</ContentTitle>
        <ContentMainInfo>
          {details.genre}·{details.author}
        </ContentMainInfo>

        {/* 작품 소개 섹션*/}
        <OpenSection
          isNotice={false}
          isShow={isShowDescription}
          setIsShow={setIsShowDescription}
          shortText={details.shortDescription}
          longText={details.longDescription}
          width="281px"
          color="#989898"
        />

        {/* 공지 섹션 */}
        <OpenSection
          isNotice={true}
          isShow={isShowNotice}
          setIsShow={setIsShowNotice}
          shortText={details.shortNotice}
          longText={details.longNotice}
          width="264px"
          color="#000000"
        />
      </Wrapper>
    </Div>
  );
};

export default ContentInfo;

const Div = styled.div`
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

// 작품 제목
const ContentTitle = styled.p`
  font-family: "Noto Sans KR Bold";
  font-size: 18px;

  margin: 32px 0px 14px 16px;
`;

// 작품 핵심 정보 (장르, 작가 등)
const ContentMainInfo = styled.p`
  font-family: "Noto Sans KR Regular";
  font-size: 13px;

  margin: 0px 0px 4px 16px;
`;
