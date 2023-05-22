import styled from "styled-components";

// icons
import paiddownload from "../../assets/icon/Detail/paiddownload.png";
import freedownload from "../../assets/icon/Detail/freedownload.png";

const EpisodeItem = ({
  imageUrl,
  episodeNumber,
  title,
  date,
  volumn,
  isFree,
}) => {
  return (
    <ItemWrapper>
      <EpisodeImg src={imageUrl} />

      <EpisodeInfo>
        <EpisodeTitle>
          {episodeNumber}화 {title}
        </EpisodeTitle>
        <OtherInfo>
          {volumn}·{date}
        </OtherInfo>
      </EpisodeInfo>

      {/* 무료 회차이면 무료 다운로드 아이콘 */}
      {isFree ? (
        <DownloadBtn src={freedownload} />
      ) : (
        <DownloadBtn src={paiddownload} />
      )}
    </ItemWrapper>
  );
};

export default EpisodeItem;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  margin-bottom: 16px;
`;

// 에피소드 이미지
const EpisodeImg = styled.img`
  border-radius: 3px;

  width: 38px;
  height: 56px;
`;

// 에피소드 정보 (제목, 용량, 날짜)
const EpisodeInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  width: 228px;
`;

// 에피소드 제목
const EpisodeTitle = styled.div`
  font-family: "Noto Sans KR Regular";
  font-size: 14px;
`;

// 에피소드 기타 정보 (용량, 날짜)
const OtherInfo = styled.div`
  font-family: "Noto Sans KR Regular";
  font-size: 11px;
  color: #949494;
`;

// 에피소드 다운로드 버튼
const DownloadBtn = styled.img`
  width: 28px;
  height: 40px;
`;
