import styled from "styled-components";
import Slider from "react-slick";

const EventSlide = ({ img }) => {
  return <IMG src={img} />;
};

export default EventSlide;

const IMG = styled.img`
  width: 100%;
  height: 70vh;
`;
