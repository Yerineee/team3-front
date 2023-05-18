import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ContentSlide = ({ contents }) => {
  console.log(contents);
  return (
    <>
      <Carousel
        showStatus={false} // 상태 표시줄 숨김
        showIndicators={false} // 인디케이터 숨김
        showArrows={false}
        showThumbs={false} // 썸네일 숨김
        centerMode // 중앙 정렬 모드 사용
        centerSlidePercentage={100 / 3} // 가로 길이의 33.33%만큼 보여줌
      >
        {contents.map(content => (
          <ImageContainer key={content.contentId}>
            <Img src={content.image} alt={content.contentId} />
          </ImageContainer>
        ))}
      </Carousel>
    </>
  );
};

export default ContentSlide;

const ImageContainer = styled.div`
  width: 357px;
  height: 175px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0px;
  margin-right: 6px;
`;

const Img = styled.img`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 6.06%;

  height: 155px;
  width: 115px;
  border-radius: 5px;

  //padding-right: 6px;
  max-width: 100%; /* 이미지의 최대 너비를 100%로 설정하여 슬라이드 내에 맞춥니다 */
  max-height: 100%; /* 이미지의 최대 높이를 100%로 설정하여 슬라이드 내에 맞춥니다 */
  object-fit: contain; /* 이미지가 왜곡되지 않도록 contain을 설정합니다 */

  border-radius: 5px;
`;
