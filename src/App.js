import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='proyecto-daw' element={<HomePage />} >
        <Route path='home' element={<HomePage />} />       
        <Route path='game' element={<HomePage />} />
        <Route path='index' element={<HomePage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
