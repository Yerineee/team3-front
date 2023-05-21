import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pass from "../../../assets/icon/Main/pass.png";
import timedeal from "../../../assets/icon/Main/timedeal.png";
import ten from "../../../assets/icon/Main/ten.png";

const Ranking = ({ index }) => {
  return <Caption>{index + 1}</Caption>;
};
const Ten = () => {
  return <Icon src={ten}></Icon>;
};
const TimeDeal = () => {
  return <Icon src={timedeal}></Icon>;
};
const Pass = () => {
  return <Icon src={pass}></Icon>;
};

const ContentSlide = ({ contents, sort }) => {
  let Component;

  switch (sort) {
    case "ranking":
      Component = Ranking;
      break;
    case "freepass":
      Component = Pass;
      break;
    case "freetoday":
      Component = Ten;
      break;
    case "timedeal":
      Component = TimeDeal;
      break;
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
              {sort === "ranking" ? (
                <Component index={index} />
              ) : (
                <IconContainer>
                  {Component && <Component index={index} />}
                </IconContainer>
              )}
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

  display: flex;
  justify-content: center;
  align-items: center;

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

const IconContainer = styled.div`
  position: absolute;
  width: 15px;
  height: 15px;
  left: 0px;
  top: 0px;
`;

const Icon = styled.img``;
