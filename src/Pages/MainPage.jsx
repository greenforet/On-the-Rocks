import React from 'react';
import styled from "styled-components";
import FirstPage from '../components/FirstPage';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SecondMainSection from '../components/SecondMainSection';
import ParallaxSection from '../components/ParallaxSection';
import LastSection from '../components/LastSection';


const MainPage = () => {

  return (
    <Container>
      <Header/>
      <FirstPage/>
      <MainSection/>
      <ParallaxSection/>
      <SecondMainSection/>
      <LastSection/>
      <Footer/>
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  min-width: 1200px;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden; 
`;




