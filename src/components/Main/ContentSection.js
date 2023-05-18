import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API } from "../../config";
import ContentSlide from "./ContentSlide";

const ContentSection = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    axios
      .get(API.GET_NOVELS)
      .then(response => {
        const contentsData = response.data.novels;
        setContents(contentsData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, []);

  return (
    <div>
      <TopicTitle>실시간 랭킹</TopicTitle>
      <ContentSlide contents={contents} />
    </div>
  );
};

export default ContentSection;

const TopicTitle = styled.p`
  padding: 0 114.83px 10px 6px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;
