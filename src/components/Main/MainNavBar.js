import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cookie from "../../assets/Main/cookie.png";
import logo from "../../assets/Main/logo.png";
import profile from "../../assets/Main/profile.png";
import search from "../../assets/Main/search.png";

const MainNavBar = () => {
  return (
    <Div>
      <div>
        <ProfileIcon src={profile} />
        <Link to="/main">
          <MainLogo src={logo} />
        </Link>
        <CookieIcon src={cookie} />
        <SearchIcon src={search} />
      </div>
    </Div>
  );
};

export default MainNavBar;

const Div = styled.div`
  position: relative;
  top: 0px;

  display: flex;
  align-items: center;

  height: 141px;
  background-color: #00dc64;
`;

const MainLogo = styled.img`
  position: absolute;
  width: 120px;
  height: 30px;
  left: calc(50% - 120px / 2 - 1px);
  top: 79px;
`;

const ProfileIcon = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;

  left: 26px;
  top: 82px;
`;

const CookieIcon = styled.img`
  position: absolute;
  width: 20px;
  height: 20px;

  right: 55.76px;
  top: 86.64px;
`;

const SearchIcon = styled.img`
  position: absolute;
  width: 18.93px;
  height: 19.85px;

  right: 24.92px;
  top: 86.64px;

  transform: rotate(-14.28deg);
`;
