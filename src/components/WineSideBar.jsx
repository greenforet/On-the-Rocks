import React from 'react';
import styled from 'styled-components';
import NotePaper from "../images/NotePaper.png"

const WineSideBar = () => {
  return (
    <SideBarContainer>
      <SideBarImage src={NotePaper}/>
      <WineList>
        <WineTitle>Wine List</WineTitle>
        <WineItem>reds</WineItem>
        <WineItem>whites</WineItem>
        <WineItem>sparkling</WineItem>
        <WineItem>rose</WineItem>
        <WineItem>dessert</WineItem>
        <WineItem>port</WineItem>
      </WineList>
    </SideBarContainer>
  );
};

export default WineSideBar;


const SideBarContainer = styled.div`
  position: relative;
  width: 300px;
`;

const SideBarImage = styled.img`
  width: 300px;
  height: 600px;
  padding-bottom: 200px;
  margin-top: 130px;

`;

const WineList = styled.div`
  position: absolute;
  top: 100px;
  left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 80%;
  padding: 20px;
`;

const WineTitle = styled.h2`
  font-size: 2rem;
  font-family: 'JacksonAmor', serif;
  color: #4A4A4A;
  margin-bottom: 15px;
  margin-top: 180px;
`;

const WineItem = styled.div`
  font-size: 1.2rem;
  color: #4A4A4A;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'SSShinb7Regular', serif;

  &:hover {
    color: #93C6E7;
  }
`;