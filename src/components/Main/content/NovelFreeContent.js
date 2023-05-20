import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../config";
import styled from "styled-components";
import ContentSection from "../ContentSection";

const NovelFreeContent = () => {
  const [ing, seting] = useState([]);
  const [freepass, setFreepass] = useState([]);
  const [freetoday, setFreetoday] = useState([]);
  const [timedeal, setTimedeal] = useState([]);

  useEffect(() => {
    axios
      .get(API.GET_NOVELS_FREELIST_FREETODAY)
      .then(response => {
        const freetodayData = response.data.novels;
        setFreetoday(freetodayData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, []);

  return (
    <Div>
      <Section>
        <TopicTitle>무료 작품</TopicTitle>
        <ContentSection
          topicTitle={"연재중"}
          contentData={freetoday}
        />
        <ContentSection topicTitle={"FREE PASS"} contentData={freetoday} sort={"freepass"}/>
        <ContentSection topicTitle={"매일 10시 무료"} contentData={freetoday} sort={"freetoday"} />
        <ContentSection topicTitle={"TIME DEAL"} contentData={freetoday} sort={"timedeal"} />
      </Section>
    </Div>
  );
};

export default NovelFreeContent;

const Div = styled.div``;

const TopicTitle = styled.p`
  padding: 0 114.83px 10px 16px;

  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 22px;

  color: #000000;
`;

const Section = styled.div`
  margin-bottom: 52px;
`;
