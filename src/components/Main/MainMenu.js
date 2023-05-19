import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const MainMenu = () => {
  const genre = "장르";
  const [sectionItem, setSectionItem] = useState([
    "NOVEL",
    "COMIX",
    "시리즈 에디션",
    "보관함",
  ]);
  const subNovelItem = ["로맨스", "로판", "판타지", "현판", "무협"];

  const [selectedItem, setSelectedItem] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isGenreVisible, setIsGenreVisible] = useState(false);

  const handleGenreClick = () => {
    setSelectedGenre(!selectedGenre);
    setIsGenreVisible(prevState => !prevState);
  };

  const handleItemClick = item => {
    if (selectedItem === item) {
      setSelectedItem(""); // 같은 아이템을 다시 클릭하면 선택 해제
      setSectionItem(["NOVEL", "COMIX", "시리즈 에디션", "보관함"]);
    } else {
      setSelectedItem(item);
      setSectionItem(["NOVEL"]);
    }
  };

  return (
    <>
      {sectionItem.map(item => {
        const isSelected = selectedItem === item;
        return (
          <div key={item}>
            <Section
              isSelected={isSelected}
              onClick={() => handleItemClick(item)}
            >
              <SectionTitle isSelected={isSelected}>{item}</SectionTitle>
            </Section>
            {isSelected && (
              <>
                <Link to="/main/novels">
                  <SubMenu
                    onClick={handleGenreClick}
                    isSelected={selectedGenre}
                  >
                    <SectionTitle isSelected={selectedGenre}>
                      {genre}
                    </SectionTitle>
                  </SubMenu>
                </Link>
                {isGenreVisible && (
                  <Link to="/main/novels">
                    <SubMenuContent>
                      {subNovelItem.map(subItem => (
                        <SubMenu key={subItem}>
                          <SubMenuTitle>{subItem}</SubMenuTitle>
                        </SubMenu>
                      ))}
                    </SubMenuContent>
                  </Link>
                )}
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MainMenu;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 160px;
  gap: 10px;
  height: 32px;
  background: #00dc64;
  border-width: 1.5px 0px;
  border-style: solid;
  border-color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SectionTitle = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${props => (props.isSelected ? "#000000" : "#ffffff")};
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 160px;
  gap: 10px;
  height: 32px;
  background: #00dc64;
  border-width: 1.5px 0px;
  border-style: solid;
  border-color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const SubMenuTitle = styled.p`
  font-family: "Apple SD Gothic Neo";
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.01em;
  color: ${props => (props.isSelected ? "#000000" : "#ffffff")};
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const SubMenuContent = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  gap: 5px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  margin-top: 5px; */
`;
