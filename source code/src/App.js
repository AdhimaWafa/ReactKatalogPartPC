import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Konten from "./components/Konten";
import Footer from "./components/Footer";
import "./style/landingpage.css"
import Laptop from "./pages/Laptop";
import Vga from "./pages/Vga";
import Motherboard from "./pages/Motherboard";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path='/' exact element={<Konten />} />
          <Route path='/laptop' exact element={<Laptop />} />
          <Route path='/vga' exact element={<Vga />} />
          <Route path='/motherboard' exact element={<Motherboard />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
