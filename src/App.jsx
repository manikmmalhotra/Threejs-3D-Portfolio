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
import Skills from "./components/Skills";
import { useEffect, useRef } from "react";

import AnimatedCursor from "react-animated-cursor";

const App = () => {
  

  return (
    <BrowserRouter>
    
       <div className="relative z-0 bg-primary">
          <AnimatedCursor
            innerSize={15}
            outerSize={80}
            color="255, 255, 255"
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={1.4}
          />
        <StarsCanvas />
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        {/* <div className="portal">
        <Skills />
        </div> */}
        <div className="relative z-0">
          <Contact />
        </div>
      </div>

    
     
    </BrowserRouter>
  );
};

export default App;
