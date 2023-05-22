import styled from "styled-components";

// icons
import moreview from "../../assets/icon/Detail/moreview.png";

// components
import EpisodeItem from "./EpisodeItem";

const EpisodeList = ({ imageUrl, episodes }) => {
  return (
    <EpisodeWrapper>
      {/* 상단의 버튼 */}
      <TopBtnSection>
        {/* 선택 구매 버튼 */}
        <BuyBtn>
          <BuyBtnText>선택 구매</BuyBtnText>
          <BuyBtnImg src={moreview} />
        </BuyBtn>
        {/* 정렬 버튼 */}
        <SortBtn>
          <ClickedBtn>최신순</ClickedBtn>
          <ClickedBtn>|</ClickedBtn>
          <UnclickedBtn>1화부터</UnclickedBtn>
        </SortBtn>
      </TopBtnSection>

      {/* 에피소드 아이템 컴포넌트*/}
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
  justify-content: space-between;

  width: 327px;
`;

// 선택 구매 버튼
const BuyBtn = styled.span`
  display: flex;
  align-items: center;

  width: 78px;
  height: 40px;
`;

// 선택 구매 버튼 텍스트
const BuyBtnText = styled.span`
  font-family: "Noto Sans KR Medium";
  font-size: 13px;
`;

// 선택 구매 버튼 이미지
const BuyBtnImg = styled.img`
  width: 5px;
  height: 10px;
  padding: 2px 4.5px;
  margin-left: 4px;

  filter: invert(69%) sepia(0%) saturate(1471%) hue-rotate(154deg)
    brightness(88%) contrast(89%);
`;

// 정렬 버튼
const SortBtn = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93px;
  height: 40px;
`;

// 최신순 정렬 버튼 (클릭된 버튼)
const ClickedBtn = styled.span`
  font-family: "Noto Sans KR Regular";
  font-size: 11px;
  color: #a1a1a1;
`;

// 오래된 순(1화부터) 정렬 버튼 (클릭되지 않은 버튼)
const UnclickedBtn = styled.span`
  font-family: "Noto Sans KR Regular";
  font-size: 11px;
`;
