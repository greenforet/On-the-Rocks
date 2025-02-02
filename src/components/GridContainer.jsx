import React from 'react';
import styled from 'styled-components';

const GridContainer = ({ items, currentPage, setCurrentPage, itemsPerPage, totalItems }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <Container>
      <Grid>
        {items.map((item) => (
          <GridItem key={item.id}>
            <ItemImage>{item.image}</ItemImage>
            <ItemName>{item.name}</ItemName>
          </GridItem>
        ))}
      </Grid>
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
    </Container>
  );
};

export default GridContainer;

const Container = styled.div`
  flex: 1;
  padding-left: 350px;
  margin-bottom: 140px;
  overflow-y: auto;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  max-width: 1200px;
  margin-left: 60px;
  margin-right: 60px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ItemImage = styled.div`
  width: 200px;
  height: 300px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ItemName = styled.div`
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