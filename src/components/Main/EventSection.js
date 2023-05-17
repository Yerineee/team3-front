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
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      showIndicators={false}
    >
      {events.map(event => (
        <ImageContainer key={event.eventId}>
          <img src={event.image} />
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
  margin-bottom: 31px;
`;
