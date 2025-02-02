import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import styled from 'styled-components';
import BeerSideBar from './BeerSideBar';
import GridContainer from './GridContainer';
import FlowerPatternImage from '../images/FlowerPattern.jpeg'

const BeerDetailedPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wines, setWines] = useState([]);
  const [displayedWines, setDisplayedWines] = useState([]);

  const itemsPerPage = 6;

  useEffect(() => {
    const tempData = [
      { id: 1, image: "와인사진1", name: "Chateau Margaux" },
      { id: 2, image: "와인사진2", name: "Opus One" },
      { id: 3, image: "와인사진3", name: "Petrus" },
      { id: 4, image: "와인사진4", name: "Lafite Rothschild" },
      { id: 5, image: "와인사진5", name: "Mouton Rothschild" },
      { id: 6, image: "와인사진6", name: "Latour" },
      { id: 7, image: "와인사진7", name: "Haut-Brion" },
      { id: 8, image: "와인사진8", name: "Romanée-Conti" },
      { id: 9, image: "와인사진9", name: "Screaming Eagle" },
      { id: 10, image: "와인사진10", name: "Grange" }
    ];
    setWines(tempData);
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setDisplayedWines(wines.slice(startIndex, endIndex));
  }, [currentPage, wines]);

  return (
    <Container>
      <WineDetailedPageContainer isDropdownOpen={isDropdownOpen}>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle 
            src={FlowerPatternImage}
            isDropdownOpen={isDropdownOpen}>
            ale
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
        <SideBarWrapper>
          <BeerSideBar isDropdownOpen={isDropdownOpen}/>
        </SideBarWrapper>
        <GridContainer
            items={displayedWines}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemsPerPage={itemsPerPage}
            totalItems={wines.length} 
          />
      </MainContent>
    </Container>
  );
};

export default BeerDetailedPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F2F0EA;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

const WineDetailedPageContainer = styled.div`
  min-width: 1200px; 
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: #F2F0EA;

  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.isDropdownOpen ? '400px' : '130px'};
  background-color: #93C6E7;
  transition: all 0.5s ease;
  opacity: ${props => props.isDropdownOpen ? 1 : 0};
  z-index: -1;
}
`;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoryTitle = styled.div`
  font-size: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  padding-top: 20px;
  font-family: 'JacksonAmor', serif;
  margin-top: ${props => props.isDropdownOpen ? '400px' : '130px'};
  transition: margin-top 0.5s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.src});
    background-size: 400px 600px;
    background-repeat: repeat;  
    background-position: center;
    opacity: 0.6;
    z-index: -1;
  }
`;

const MainContent = styled.div`
  display: flex;
  position: relative;
  min-height: calc(100vh - 350px);
  overflow: hidden;
  margin-top: 350px;
`;

const SideBarWrapper = styled.div`
  position: fixed;
  top: 100px;
  left: 50px;
  width: 300px;
  z-index: 1;
`;