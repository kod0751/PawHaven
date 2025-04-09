import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './widgets/Header';
import HomePage from './pages/home/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />;
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
