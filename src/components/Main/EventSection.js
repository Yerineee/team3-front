import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  //더미 데이터 이미지 주소 입니다.
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQau7zY2IKawY3tRCBGyBmfk9hnP0nYWrg3sQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXL5C8apx8S76uB6CJXbhim_7Q5mVVQZ4sPg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIPvq_dCcCOP9IjKShWKUjvl9T1uy_3m0W16z6Y3Pfl1TE99RksShGCIv_-fd-q4wSlTg&usqp=CAU",
];

const EventSection = () => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
    >
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image} />
        </ImageContainer>
      ))}
    </Carousel>
  );
};

export default EventSection;

const ImageContainer = styled.div`
  width: 357px;
  height: 209px;
  left: 0px;
  top: 0px;

  margin: auto;
  margin-top: 31px;
`;
