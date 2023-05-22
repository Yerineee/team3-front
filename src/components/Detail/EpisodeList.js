import styled from "styled-components";

// icons
import moreview from "../../assets/icon/Detail/moreview.png";

// components
import EpisodeItem from "./EpisodeItem";

const EpisodeList = ({ imageUrl, episodes }) => {
  return (
    <EpisodeWrapper>
      <TopBtnSection>
        <BuyBtn>
          <BuyBtnText>선택 구매</BuyBtnText>
          <BuyBtnImg src={moreview} />
        </BuyBtn>
      </TopBtnSection>
      {episodes.map(item => {
        return (
          <EpisodeItem
            imageUrl={imageUrl}
            key={item.pageId}
            episodeNumber={item.episodeNumber}
            title={item.title}
            date={item.date}
            volumn={item.volumn}
            isFree={item.isFree}
          />
        );
      })}
    </EpisodeWrapper>
  );
};

export default EpisodeList;

const EpisodeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #f6f6f6;
  border-radius: 18px;

  width: 359px;
`;

// 에피소드 리스트 상단 버튼 섹션 (선택 구매 버튼, 정렬 버튼)
const TopBtnSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 327px;
`;

// 선택 구매 버튼
const BuyBtn = styled.p`
  display: flex;
  align-items: center;

  width: 78px;
  height: 40px;
`;

// 선택 구매 버튼 텍스트
const BuyBtnText = styled.p`
  font-family: "Noto Sans KR Medium";
  font-size: 13px;
`;

// 선택 구매 버튼 이미지
const BuyBtnImg = styled.img`
  width: 5px;
  height: 10px;
  padding: 2px 4.5px;
  margin-left: 4px;

  color: #989898;
`;
