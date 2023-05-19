import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../config";
import styled from "styled-components";
import ContentSection from "./ContentSection";
import NovelFreeContent from "./content/NovelFreeContent";

const SubContent = () => {
  const [novel, setNovel] = useState([]);

  useEffect(() => {
    axios
      .get(API.GET_NOVELS)
      .then(response => {
        const novelData = response.data.novels;
        setNovel(novelData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, []);

  return (
    <Div>
      <Section>
        <TopicTitle>최근 본 작품</TopicTitle>
        <ContentSection contentData={novel} />
        <TopicTitle>실시간 랭킹</TopicTitle>
        <ContentSection contentData={novel} />
        <NovelFreeContent />
        <TopicTitle>지금 시리즈가 추천해요</TopicTitle>
        <ContentSection contentData={novel} />
      </Section>
    </Div>
  );
};

export default SubContent;

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
