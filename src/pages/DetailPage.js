import { useState, useEffect } from "react";
import styled from "styled-components";

// icons
import moreview from "../assets/icon/Detail/moreview.png";

// components
import DetailNavBar from "../components/Detail/DetailNavBar";
import ContentInfo from "../components/Detail/ContentInfo";
import EpisodeList from "../components/Detail/EpisodeList";

// 커버 이미지 임의로 넣어두었습니다.
const DetailPage = () => {
  const [details, setDetails] = useState([]); // 작품의 장르, 제목 등 세부 내용
  const [episodes, setEpisodes] = useState([]); // 작품의 에피소드 정보
  const [recommend, setRecommend] = useState([]); // 추천하는 다른 작품

  // 해시태그와 작품의 세부 내용 등은 임의로 설정했습니다.
  useEffect(() => {
    setDetails([
      {
        genre: "로맨스",
        title: "사랑의 새싹약국",
        rating: 9.7,
        commentCount: 2961,
        completed: true,
        author: "이유진,반지",
        shortDescription:
          "그 곳, 새싹약국엔 약국계의 F4, 꽃미남 4인방 약사들이 있다.",
        longDescription:
          "그 곳, 새싹약국엔 약국계의 F4, 꽃미남 4인방 약사들이 있다. 훈훈한 새싹들이 친절하게 약을 지어주는 약국계의 올모스트 파라다이스 새싹약국. 어느날 학비 마련하랴, 생활비 마련하랴, 사연 많고 가난한 만년 알바생 영이 전산보조원으로 낙하산을 타고 내려오게 되는데……. 싸가지가 바가지인 냉미남 약사 고찬영과 뻔뻔하고 능청갑에 저질이기까지한 알바생 서 영의 이해타산 상부상조 계약연애 계약결혼 스캔들. 사랑 앞에 지조있는 남자와 심남만 열두명인 여자의 대략난감 로맨스.",
        totalEpisodes: 87,
        imageUrl:
          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAyMjZfMTMz%2FMDAxNjQ1ODc3MjcyNzAw.hJIuZtpsiJVEsMtKqmZ1Kumr_T9igZ91lcNBWxtQl24g.bp28jqJSADyzgk_Yc5IbNM7cfftmddjFZBKqQRRMT_4g.JPEG.dlswn1007%2F%25BB%25E7%25B6%25FB%25C0%25C7-%25BB%25F5%25BD%25CF%25BE%25E0%25B1%25B9%2528%25BC%25F6%25C1%25A4%2529.jpg&type=sc960_832",
        downloadCount: 2230000,
        hashtags: ["로맨틱코미디", "일상로맨스", "독점", "계약관계", "223만"],
      },
    ]);
    setEpisodes([
      {
        pageId: 1,
        episodeNumber: 1,
        title: "프롤로그_우리 방금 이혼했어요",
        date: "2018-05-02",
        volumn: "0.2 MB",
        isFree: true,
      },
      {
        pageId: 2,
        episodeNumber: 2,
        title: "어서 오세요, 새싹 약국입니다",
        date: "2018-05-02",
        volumn: "0.2 MB",
        isFree: true,
      },
      {
        pageId: 3,
        episodeNumber: 3,
        title: "망했다. 이 면접은",
        date: "2018-05-02",
        volumn: "0.2 MB",
        isFree: true,
      },
    ]);
    setRecommend([
      {
        otherWorks: [
          {
            contentId: 1,
            genre: "미스터리",
            title: "연인이여, 돌아와줘",
            downloadCount: 5000,
          },
          {
            contentId: 2,
            genre: "판타지",
            title: "마법사의 제자",
            downloadCount: 3000,
          },
          {
            contentId: 3,
            genre: "로맨스",
            title: "그대와 함께한 시간",
            downloadCount: 2000,
          },
        ],
        viewedWorks: [
          {
            contentId: 1,
            genre: "미스터리",
            title: "연인이여, 돌아와줘",
            downloadCount: 5000,
          },
          {
            contentId: 2,
            genre: "판타지",
            title: "마법사의 제자",
            downloadCount: 3000,
          },
          {
            contentId: 3,
            genre: "로맨스",
            title: "그대와 함께한 시간",
            downloadCount: 2000,
          },
        ],
      },
    ]);
  }, []);

  return (
    <Div>
      <CoverBackground />
      <DetailNavBar />

      <ContentWrapper>
        <ContentInfo details={details} />

        <EpisodeList imageUrl={details[0]?.imageUrl} episodes={episodes} />
        <MoreEpisodeBtn>
          <MoreEpisodeBtnText>
            총 {details[0]?.totalEpisodes}화
          </MoreEpisodeBtnText>
          <MoreEpisodeBtnImg src={moreview} />
        </MoreEpisodeBtn>
      </ContentWrapper>
      <FirstViewBtn>무료로 첫화보기</FirstViewBtn>
    </Div>
  );
};

export default DetailPage;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 배경 색상은 임의로 설정했습니다.
const CoverBackground = styled.div`
  position: relative;
  z-index: -1;

  background-color: #c6eb91;
  width: 100%;
  height: 210px;
`;

const ContentWrapper = styled.div`
  position: relative;
  top: -214px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MoreEpisodeBtn = styled.button`
  position: relative;
  top: -21.5px;

  width: 358px;
  height: 43px;

  background: #ffffff;
  border: 2px solid #000000;
  border-radius: 18px;
`;

const MoreEpisodeBtnText = styled.span`
  height: 15px;

  font-family: "Noto Sans KR Medium";
  font-size: 14px;
  text-align: center;
`;

const MoreEpisodeBtnImg = styled.img`
  width: 5px;
  height: 10px;

  margin-left: 12px;
`;

const FirstViewBtn = styled.button`
  position: fixed;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 100px;

  width: 280px;
  height: 46px;

  background-color: #3c3c3c;
  color: #ffffff;
  font-family: "Noto Sans KR Medium";
  font-size: 16px;

  border-radius: 61px;
  border: 0px;
`;
