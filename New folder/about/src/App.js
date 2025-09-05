import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import AllComo from './pages/AllComonents/AllComo';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<AllComo id='home' />} />
            <Route exact path='/home' element={<AllComo id='home' />} />
            <Route exact path='/about' element={<AllComo id='about' />} />
            <Route exact path='/resume' element={<AllComo id='resume' />} />
            <Route exact path='/projects' element={<AllComo id='projects' />} />
            <Route exact path='/contact' element={<AllComo id='contact' />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
