import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// components
import RecommendItem from "./RecommendItem";

const RecommendList = ({ text, works }) => {
  return (
    <Wrapper>
      <Title>{text}</Title>

      <Carousel
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        centerMode={true}
        centerSlidePercentage={100 / 3.5}
      >
        {/* 추천 작품 컴포넌트*/}
        {works &&
          works.map(item => {
            return (
              <RecommendItem
                key={item.title}
                genre={item.genre}
                title={item.title}
                downloadCount={item.downloadCount}
              />
            );
          })}
      </Carousel>
    </Wrapper>
  );
};

export default RecommendList;

const Wrapper = styled.div`
  width: 100%;
  margin: 10.5px 0px 32px 32px;
`;

const Title = styled.div`
  font-family: "Noto Sans KR Medium";
  font-size: 16px;
  margin-bottom: 16px;
`;
