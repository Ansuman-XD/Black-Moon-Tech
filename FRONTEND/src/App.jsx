import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Section
      <Services /> */}

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
