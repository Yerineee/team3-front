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
      ContentSection
      <ContentSlide contents={contents} />
    </div>
  );
};

export default ContentSection;
