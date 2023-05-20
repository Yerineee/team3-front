import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import free from "../../assets/icon/Main/free.png";
import pass from "../../assets/icon/Main/pass.png";
import timedeal from "../../assets/icon/Main/timedeal.png";
import ten from "../../assets/icon/Main/ten.png";

const Ranking = ({ index }) => {
  return <Caption>{index + 1}</Caption>;
};

const Ing = () => {
  return <Icon src={free}></Icon>;
};

const ContentSlide = ({ contents, sort }) => {
  let Component; // 대문자로 시작하는 변수 이름으로 수정

  switch (sort) {
    case "ranking":
      Component = Ranking; // 대문자로 시작하는 컴포넌트 이름으로 할당
      break;
    case "ing":
      Component = Ing;
      break;
    // case "freepass":
    //   Component = SubContent;
    //   break;
    // case "freetoday":
    //   Component = SubContent;
    //   break;
    // case "timedeal":
    //   Component = SubContent;
    //   break;
    default:
      Component = null;
  }

  return (
    <>
      <Carousel
        showStatus={false}
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        centerMode
        centerSlidePercentage={100 / 3}
      >
        {contents.map((content, index) => (
          <ImageContainer key={content.contentId}>
            <Img backgroundImage={content.image} alt={content.contentId}>
              {Component && <Component index={index} />}
            </Img>
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
`;

const Img = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 6.06%;

  height: 155px;
  width: 115px;
  border-radius: 5px;

  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;
`;

const Caption = styled.div`
  position: absolute;
  width: 22px;
  height: 54px;
  left: -3px;
  bottom: -10.1px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 54px;

  color: rgba(255, 255, 255, 0.95);

  text-shadow: 2px -2px 4px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.img`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 0px;
  top: 0px;

`;