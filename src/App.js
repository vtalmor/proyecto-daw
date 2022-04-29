import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HelpPage from './pages/HelpPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='proyecto-daw' element={<HomePage />} />
        <Route path='proyecto-daw/home' element={<HomePage />} />
        <Route path='proyecto-daw/help' element={<HelpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
