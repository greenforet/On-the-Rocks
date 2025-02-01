import React, { useState, useEffect } from 'react';
import Header from "../components/Header"
import styled from 'styled-components';
import WineSideBar from './WineSideBar';

const WineDetailedPage = () => {
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

  const totalPages = Math.ceil(wines.length / itemsPerPage);

  return (
    <Container>
      <WineDetailedPageContainer>
        <Header 
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        />
        <ContentWrapper>
          <CategoryTitle isDropdownOpen={isDropdownOpen}>
            reds
          </CategoryTitle>
        </ContentWrapper>
      </WineDetailedPageContainer>
      <MainContent>
      <SideBarWrapper>
        <WineSideBar isDropdownOpen={isDropdownOpen}/>
      </SideBarWrapper>
      <WineGridContainer>
        <WineGrid>
          {displayedWines.map((wine) => (
            <WineItem key={wine.id}>
              <WineImage>{wine.image}</WineImage>
              <WineName>{wine.name}</WineName>
            </WineItem>
          ))}
        </WineGrid>
        {totalPages > 1 && (
          <Pagination>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <PageButton
                key={page}
                onClick={() => setCurrentPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PageButton>
            ))}
          </Pagination>
        )}
      </WineGridContainer>
      </MainContent>
    </Container>
  );
};

export default WineDetailedPage;

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
  height: 350px;
  position: fixed;
  top: 0;
  z-index: 3;
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
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  margin-top: ${props => props.isDropdownOpen ? '400px' : '130px'};
  transition: margin-top 0.5s ease;
  position: relative;
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
  height: 100%;
  z-index: 1;
`;

const WineGridContainer = styled.div`
  flex: 1;
  padding-left: 350px;
  margin-bottom: 140px;
  overflow-y: auto;
  height: 100%;
`;

const WineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin-left: 60px;
  margin-right: 60px;
`;

const WineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const WineImage = styled.div`
  width: 200px;
  height: 300px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WineName = styled.div`
  font-size: 1.2rem;
  font-family: 'SSShinb7Regular', serif;
  text-align: center;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 80px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
  border: none;
  background-color: ${props => props.isActive ? '#93C6E7' : 'transparent'};
  color: ${props => props.isActive ? 'white' : 'black'};
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.isActive ? '#93C6E7' : '#e0e0e0'};
  }
`;
