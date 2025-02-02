import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineDetailedPage from './components/WineDetailedPage';
import MainPage from './Pages/MainPage';
import BeerDetailedPage from './components/BeerDetailedPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/winedetailedpage" element={<WineDetailedPage />} />
        <Route path="/beerdetailedpage" element={<BeerDetailedPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
