import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// api
import { API } from "../config";

// icons
import moreview from "../assets/icon/Detail/moreview.png";

// components
import DetailNavBar from "../components/Detail/nav/DetailNavBar";
import ContentInfo from "../components/Detail/info/ContentInfo";
import EpisodeList from "../components/Detail/episode/EpisodeList";
import RecommendList from "../components/Detail/recommend/RecommendList";
import Footer from "../components/Footer/Footer";

const DetailPage = () => {
  const [details, setDetails] = useState([]); // 작품의 장르, 제목 등 세부 정보
  const [hashtags, setHashtags] = useState([]); // 작품의 해시태그
  const [episodes, setEpisodes] = useState([]); // 작품의 에피소드 정보
  const [recommend, setRecommend] = useState([]); // 추천하는 다른 작품
  const { contentId } = useParams(); // 작품의 id

  useEffect(() => {
    axios
      .get(`${API.GET_DETAILS}/${contentId}/details`)
      .then(response => {
        // 작품 세부 정보
        const detailsData = response.data.contentDetail;
        setDetails(detailsData);

        // 해시태그
        const hashtagsData = response.data.hashtags.hashtagList;
        setHashtags(hashtagsData);

        // 작품의 에피소드 정보
        const episodesData = response.data.episodes.episodeList;
        setEpisodes(episodesData);

        // 추천하는 다른 작품
        const recommendData = {
          otherWorks: response.data.otherWorks.workList,
          viewedWorks: response.data.viewedWorks.workList,
        };
        setRecommend(recommendData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, [contentId]);

  return (
    <Div>
      <CoverBackground />
      <DetailNavBar />

      <MainWrapper>
        <ContentInfo details={details} hashtags={hashtags} />

        <EpisodeList imageUrl={details.imageUrl} episodes={episodes} />
        <MoreEpisodeBtn>
          <MoreEpisodeBtnText>총 {details.totalEpisodes}화</MoreEpisodeBtnText>
          <MoreEpisodeBtnImg src={moreview} />
        </MoreEpisodeBtn>

        <RecommendList text="작가의 다른 작품" works={recommend.otherWorks} />
        <RecommendList
          text="이 작품의 독자가 함께 본 작품"
          works={recommend.viewedWorks}
        />
        <FirstViewBtn>무료로 첫화보기</FirstViewBtn>
      </MainWrapper>
      <Footer />
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

const MainWrapper = styled.div`
  position: relative;
  top: -214px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 모든 에피소드 보기 버튼
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

// 무료로 첫화보기 버튼
const FirstViewBtn = styled.button`
  position: fixed;
  z-index: 1;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 27px;

  width: 280px;
  height: 46px;

  background-color: #3c3c3c;
  color: #ffffff;
  font-family: "Noto Sans KR Medium";
  font-size: 16px;

  border-radius: 61px;
  border: 0px;
`;
