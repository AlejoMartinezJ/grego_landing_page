import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPageV2 } from './pages/LandingV2/LandingPageV2';
import { ToTheMoonPage } from './pages/to-the-moon/ToTheMoonPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPageV2 />} />
        <Route path="/to-the-moon" element={<ToTheMoonPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
