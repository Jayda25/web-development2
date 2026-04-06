import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import MyNav from './MyNav';
import Home from './Home';
import About from './About';
import Products from './Products';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <MyNav />
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
