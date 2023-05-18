import React, { useState } from "react";
import styled from "styled-components";

const MainMenu = () => {
  const [sectionItem, setSectionItem] = useState([
    "NOVEL",
    "COMIX",
    "시리즈 에디션",
    "보관함",
  ]);
  const [selectedItem, setSelectedItem] = useState("");

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
          <div>
            <Section
              key={item}
              isSelected={isSelected}
              onClick={() => handleItemClick(item)}
            >
              <SectionTitle isSelected={isSelected}>{item}</SectionTitle>
            </Section>
            {isSelected && (
              <SubMenu>
                <SubMenuTitle>장르</SubMenuTitle>
              </SubMenu>
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

  background: #00dc64; /* 배경색은 원래 코드 그대로 유지 */

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

  color: ${props =>
    props.isSelected
      ? "#000000"
      : "#ffffff"}; /* 선택된 항목일 때 글씨색을 검정색으로 변경 */

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

  background: #00dc64; /* 배경색은 원래 코드 그대로 유지 */

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

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
`;
