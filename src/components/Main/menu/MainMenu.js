import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainMenu = () => {
  const genre = "장르";
  const [path, setPath] = useState("/main/novels");
  const [sectionItem, setSectionItem] = useState([
    "NOVEL",
    "COMIX",
    "시리즈 에디션",
    "보관함",
  ]);
  const subNovelItem = ["로맨스", "로판", "판타지", "현판", "무협"];

  const [selectedItem, setSelectedItem] = useState("");
  const [isGenreVisible, setIsGenreVisible] = useState(false);

  const handleGenreClick = () => {
    setIsGenreVisible(!isGenreVisible);
  };

  const handleItemClick = item => {
    if (selectedItem === item) {
      setSelectedItem("");
      setSectionItem(["NOVEL", "COMIX", "시리즈 에디션", "보관함"]);
      setPath("/main/novels");
    } else if (item === "NOVEL") {
      setSelectedItem(item);
      setSectionItem(["NOVEL"]);
      setPath("/main");
    }
  };

  return (
    <>
      {sectionItem.map(item => {
        const isSelected = selectedItem === item;
        const isClickable = item === "NOVEL"; // NOVEL 메뉴만 클릭 가능

        return (
          <div key={item}>
            <Menu
              to={path}
              isSelected={isSelected}
              onClick={() => isClickable && handleItemClick(item)} // 클릭 가능한 경우에만 핸들러 호출
              clickable={isClickable} // 클릭 가능한 경우에만 스타일 적용
            >
              <SectionTitle isSelected={isSelected}>{item}</SectionTitle>
            </Menu>
            {isSelected && (
              <>
                <Menu onClick={handleGenreClick} isSelected={isGenreVisible}>
                  <SectionTitle isSelected={isGenreVisible}>
                    {genre}
                  </SectionTitle>
                </Menu>
                {isGenreVisible && (
                  <SubMenuContent>
                    {subNovelItem.map(subItem => (
                      <SubMenu key={subItem}>
                        <SubMenuTitle>{subItem}</SubMenuTitle>
                      </SubMenu>
                    ))}
                  </SubMenuContent>
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
  text-decoration: none;
  border-bottom: none; /* 밑줄 제거 */
  order: 0;
  flex-grow: 0;
`;

const Menu = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 160px;
  gap: 10px;
  height: 37px;
  background: #00dc64;
  border-width: 1.5px 0px;
  border-style: solid;
  border-color: #000000;
  flex: none;
  text-decoration: none;
  order: 0;
  flex-grow: 0;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 160px;
  gap: 10px;
  height: 37px;
  background: #c3c3c3;
  border-width: 1.5px 0px;
  border-style: solid;
  border-color: #000000;
  flex: none;
  text-decoration: none;
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
  text-decoration: none;
  border-bottom: none;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const SubMenuContent = styled.div``;
