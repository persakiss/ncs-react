import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import React from 'react';
import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactPage/>} />
        <Route path='about' element={<AboutPage />} />
        <Route path='directory' element={<CampsitesDirectoryPage/>}/>
        <Route
          path='directory/:campsiteId' 
          element={<CampsiteDetailPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
