import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineDetailedPage from './components/WineDetailedPage';
import MainPage from './Pages/MainPage';
import BeerDetailedPage from './components/BeerDetailedPage';
import WineInfoPage from './components/WineInfoPage';
import BeerInfoPage from './components/BeerInfoPage';
import AboutUsPage from './Pages/AboutUsPage';
import ShopPage from './Pages/ShopPage';
import TipsPage from './Pages/TipsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/winedetailedpage" element={<WineDetailedPage />} />
        <Route path="/beerdetailedpage" element={<BeerDetailedPage/>} />
        <Route path="/wineinfopage/:itemId" element={<WineInfoPage/>} />
        <Route path="/beerinfopage/:itemId" element={<BeerInfoPage/>} />
        <Route path="/aboutuspage" element={<AboutUsPage/>} />
        <Route path="/shoppage" element={<ShopPage/>} />
        <Route path="/tipspage" element={<TipsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
