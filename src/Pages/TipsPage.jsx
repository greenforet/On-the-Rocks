import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { createGlobalStyle } from 'styled-components';
import TagImage from '../images/Tag.png'

const TipsPage = () => {
  return (
    <div>
      <GlobalStyle />
      <ImageContainer>
        <OverlayImage src={TagImage} alt="tagimage" />
        <OverlayText>Tips</OverlayText>
      </ImageContainer>
      <Header/>
    </div>
  );
};

export default TipsPage;

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #F2F0EA;
  }

  #root {
    height: 100%;
  }
`;

const ImageContainer = styled.div`
  position: fixed;  // absolute에서 fixed로 변경
  top: 0;       // Header 아래로 위치하도록 조정
  right: 400px;     // 오른쪽에 위치
  z-index: 2;      // z-index 값 증가
  width: 450px;    // 컨테이너 크기 지정
  height: auto;
  display: flex;   // flexbox 추가
  justify-content: center;
  align-items: center;
`;

const OverlayImage = styled.img`
  width: 100%;     // 컨테이너 크기에 맞춤
  height: auto;
  opacity: 0.8;
`;

const OverlayText = styled.div`
  position: absolute;
  top: 53%;  // 위치 조정 가능
  left: 55%;  // 위치 조정 가능
  transform: translate(-10%, -60%);
  transform: rotate(30deg);
  font-size: 5.5rem;
  text-align: center;
  z-index: 3;
  font-family: 'JacksonAmor', serif;
`;