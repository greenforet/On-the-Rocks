import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WineDetailedPage from './components/WineDetailedPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/winedetailedpage" element={<WineDetailedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
