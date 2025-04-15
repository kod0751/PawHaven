import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';

import HomePage from './pages/home/HomePage';
import AnimalListPage from './pages/animalList/AnimalListPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<AnimalListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
