import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../config";
import styled from "styled-components";
import ContentSection from "./ContentSection";

const MainContent = () => {
  const [novel, setNovel] = useState([]);
  const [comix, setComix] = useState([]);

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

  useEffect(() => {
    axios
      .get(API.GET_COMICS)
      .then(response => {
        const comixData = response.data.comics;
        setComix(comixData);
      })
      .catch(error => {
        console.log("Error >>", error);
      });
  }, []);

  return (
    <Div>
      <TopicTitle>실시간 랭킹</TopicTitle>
      <ContentSection topicTitle={"NOVEL"} contentData={novel} />
      <ContentSection topicTitle={"COMIX"} contentData={comix} />
    </Div>
  );
};

export default MainContent;

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
