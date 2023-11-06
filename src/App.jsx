import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { Icon,twitter, github } from "react-3d-icons";
import PortalComponent from "./components/canvas/PortalComponent";
import Skills from "./components/Skills";
import { useEffect, useRef } from "react";

const App = () => {
  

  const cursorBall = useRef(null)
  const cursorOutline = useRef(null)

  const changePosition = (e) => {
    cursorBall.current.style.top = `${e.clientY}px`;
    cursorBall.current.style.left = `${e.clientX}px`;

    cursorOutline.current.style.top = `${e.clientY}px`;
    cursorOutline.current.style.left = `${e.clientX}px`;
  }
 

  return (
    <BrowserRouter>
    
       <div onMouseMove={changePosition} className="relative z-0 bg-primary">
          <div ref={cursorBall} className="cursor-ball"></div>
          <div ref={cursorOutline} className="cursor-outline"></div>
        <StarsCanvas />
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="portal">
        <Skills />
        </div>
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

    
     
    </BrowserRouter>
  );
};

export default App;
