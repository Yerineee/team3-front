import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { API } from "../../config";

const EventSection = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(API.GET_EVENT)
      .then(response => {
        const eventsData = response.data.events;
        setEvents(eventsData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, []);

  return (
    <Div>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        infiniteLoop
        autoPlay // 자동 재생
        interval={3000} // 이미지 전환 간격(ms)
      >
        {events.map(event => (
          <ImageContainer key={event.eventId}>
            <img src={event.image} alt={event.eventId} />
          </ImageContainer>
        ))}
      </Carousel>
    </Div>
  );
};

export default EventSection;

const Div = styled.div`
  margin-bottom: 46.72px;
`;

const ImageContainer = styled.div`
  width: 357px;
  height: 209px;
  left: 0px;
  top: 0px;

  margin: auto;
  margin-top: 31px;
  margin-bottom: 46.72px;
`;
