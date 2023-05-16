import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import EventSlide from "./EventSlide";
import eventexample1 from "../../assets/Main/eventexample1.jpeg";
import eventexample2 from "../../assets/Main/eventexample2.jpeg";
import eventexample3 from "../../assets/Main/eventexample3.jpeg";

const EventSection = () => {
  const TOTAL_SLIDES = 2;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      {currentSlide}
      <SliderContainer ref={slideRef}>
        <EventSlide img={eventexample1} />
        <EventSlide img={eventexample2} />
        <EventSlide img={eventexample3} />
      </SliderContainer>
      <Button onClick={prevSlide}>Previous Slide</Button>
      <Button onClick={nextSlide}>Next Slide</Button>
    </Container>
  );
};

export default EventSection;

const Container = styled.div`
  display: flex;
  width: 60%;
  overflow: hidden;
`;
const Button = styled.button`
  all: unset;
  border: 1px solid coral;
  padding: 0.5em 2em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  display: flex;
`;
