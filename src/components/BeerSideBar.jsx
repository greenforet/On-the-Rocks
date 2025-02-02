import React from 'react';
import styled from 'styled-components';
import NotePaper from "../images/NotePaper.png"

const BeerSideBar = () => {
  return (
    <SideBarContainer>
      <SideBarImage src={NotePaper}/>
      <BeerList>
        <BeerTitle>Beer List</BeerTitle>
        <BeerItem>ales</BeerItem>
        <BeerItem>stouts</BeerItem>
        <BeerItem>red-ale</BeerItem>
      </BeerList>
    </SideBarContainer>
  );
};

export default BeerSideBar;


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

const BeerList = styled.div`
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

const BeerTitle = styled.h2`
  font-size: 2rem;
  font-family: 'JacksonAmor', serif;
  color: #4A4A4A;
  margin-bottom: 15px;
  margin-top: 180px;
`;

const BeerItem = styled.div`
  font-size: 1.2rem;
  color: #4A4A4A;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: 'SSShinb7Regular', serif;

  &:hover {
    color: #93C6E7;
  }
`;