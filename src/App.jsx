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

const App = () => {

  let cursorBall = document.querySelector(".cursor-ball");
  let cursorOutline = document.querySelector(".cursor-outline");
  document.addEventListener("mousemove", (e) => {
    cursorBall.style.top = e.pageY + "px";
    cursorBall.style.left = e.pageX + "px";
  
    cursorOutline.style.top = e.pageY + "px";
    cursorOutline.style.left = e.pageX + "px";
  });

  return (
    <BrowserRouter>
    
       <div className="relative z-0 bg-primary">
          <div className="cursor-ball"></div>
          <div className="cursor-outline"></div>
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
