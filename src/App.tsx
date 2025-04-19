import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';

import HomePage from './pages/home/HomePage';
import AnimalListPage from './pages/animalList/AnimalListPage';
import AnimalByShelterPage from './pages/animalByShelter/AnimalByShelterPage';
import LikedAnimalPage from './pages/likedAnimal.tsx/LikedAnimalPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<AnimalListPage />} />
        <Route path="/shelter" element={<AnimalByShelterPage />} />
        <Route path="/liked" element={<LikedAnimalPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
