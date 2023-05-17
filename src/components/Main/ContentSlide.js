import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContentSlide = ({ contents }) => {
  return (
    <>
      {contents.map(content => (
        <div key={content.contentId}>
          <img src={content.image} alt={content.contentId} />
        </div>
      ))}
    </>
  );
};

export default ContentSlide;
