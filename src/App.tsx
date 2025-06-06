import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './widgets/Header';

import HomePage from './pages/home/HomePage';
import AnimalListPage from './pages/animalList/AnimalListPage';
import AnimalByShelterPage from './pages/animalByShelter/AnimalByShelterPage';
import LikedAnimalPage from './pages/likedAnimal/LikedAnimalPage';
import PetDetailPage from './pages/petDetail/PetDetailPage';
import AnimalFindPage from './pages/AnimalFind/AnimalFindPage';
import ScrollToTopButton from './shared/ui/ScrollToTopButton';
import NotFoundPage from './pages/Error/404';

function AppContent() {
  const location = useLocation();

  // 유효한 경로들을 정의
  const validPaths = ['/', '/list', '/find', '/shelter', '/liked'];
  const isValidPath =
    validPaths.includes(location.pathname) ||
    location.pathname.startsWith('/detail/');

  return (
    <>
      {isValidPath && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<AnimalListPage />} />
        <Route path="/find" element={<AnimalFindPage />} />
        <Route path="/shelter" element={<AnimalByShelterPage />} />
        <Route path="/liked" element={<LikedAnimalPage />} />
        <Route path="/detail/:id" element={<PetDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
