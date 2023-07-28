import React from 'react'
import Home from './Home.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import Company from './company.jsx';

const Main = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Company />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
};

export default Main;
