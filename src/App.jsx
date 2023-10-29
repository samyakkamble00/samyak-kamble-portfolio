import React from 'react';

import About from "./Component/About";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import SocialLinks from "./Component/SocialLinks";
import Portfolio from "./Component/Portfolio";
import TechnicalSkill from "./Component/TechnicalSkill"; 
import Contact from './Component/Contact';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <TechnicalSkill /> 
      <Contact/>
      <SocialLinks />
    </div>
  );
};

export default App;
