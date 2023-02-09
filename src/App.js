import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="bg-gray-100 transition duration-300 px-8">
        <NavBar />
        <Routes basename={process.env.PUBLIC_URL}>
          <Route exact path="/" element={<About />} />
          <Route exact path="skills" element={<Skills />} />
          <Route exact path="projects" element={<Projects />} />
          <Route exact path="contact" element={<Contact/>}/>
        </Routes>
        <div className="container mx-auto pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
