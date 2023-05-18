import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { API } from "../../config";
import ContentSlide from "./ContentSlide";
import arrow from "../../assets/icon/arrow.png";

const ContentSection = ({ topicTitle }) => {
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
      <ContentContainer>
        <TopicTitle>{topicTitle}</TopicTitle>
        <MoreIcon src={arrow} />
      </ContentContainer>
      <ContentSlide contents={contents} />
    </div>
  );
};

export default ContentSection;

const TopicTitle = styled.p`
  padding: 0 114.83px 10px 14px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  /* 시리즈 메인 컬러 */

  color: #00dc64;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-right: 15px;
`;

const MoreIcon = styled.img`
  width: 7.81px;
  height: 10.01px;
`;
