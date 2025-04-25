import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';

import HomePage from './pages/home/HomePage';
import AnimalListPage from './pages/animalList/AnimalListPage';
import AnimalByShelterPage from './pages/animalByShelter/AnimalByShelterPage';
import LikedAnimalPage from './pages/likedAnimal/LikedAnimalPage';
import PetDetailPage from './pages/petDetail/PetDetailPage';
import AnimalFindPage from './pages/AnimalFind/AnimalFindPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<AnimalListPage />} />
        <Route path="/find" element={<AnimalFindPage />} />
        <Route path="/shelter" element={<AnimalByShelterPage />} />
        <Route path="/liked" element={<LikedAnimalPage />} />
        <Route path="/detail/:id" element={<PetDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
