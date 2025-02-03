import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header"
import styled from 'styled-components';
import WineSideBar from './WineSideBar';
import GridContainer from './GridContainer';
import RhombusPatternImage from '../images/RhombusPattern.jpeg'

const WineDetailedPage = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [wines, setWines] = useState([]);
  const [displayedWines, setDisplayedWines] = useState([]);
  const containerRef = useRef(null);
  const [barPosition, setBarPosition] = useState(400);

  const navigate = useNavigate();

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
  
  const handleItemClick = (itemId) => {
    navigate(`/beerinfopage/${itemId}`);
  };

  const handleScroll = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sidebarHeight = 600;
    
    const minPosition = 400;
    const maxPosition = containerRect.height - sidebarHeight - 100;

    const newPosition = Math.min(
      maxPosition,
      Math.max(minPosition, minPosition + (scrollTop * 0.3))
    );
    
    setBarPosition(newPosition);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <WineDetailedPageContainer isDropdownOpen={isDropdownOpen}>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle 
            src={RhombusPatternImage}
            isDropdownOpen={isDropdownOpen}>
            reds
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
        <SideBarWrapper style={{ top: `${barPosition}px` }}>
          <WineSideBar isDropdownOpen={isDropdownOpen}/>
        </SideBarWrapper>
        <GridSection>
          <GridContainer
              items={displayedWines}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={wines.length} 
              onItemClick={handleItemClick}
            />
        </GridSection>
      </MainContent>
    </Container>
  );
};

export default WineDetailedPage;

const Container = styled.div`
  width: 100%;        
  height: 100%;
  background-color: #F2F0EA;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  position: relative;
  display: flex;     
  flex-direction: column; 
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
    background-size: 300px 500px;
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
  margin-top: 350px;
  padding-bottom: 50px;
  width: 100%;
`;

const GridSection = styled.div`
  flex: 1;
  margin-left: 300px;  
`;

const SideBarWrapper = styled.div`
  position: fixed;
  left: 50px;
  z-index: 1;
  transform: translateY(-33%);
  transition: top 0.3s ease-out;
  height: fit-content;
`;
