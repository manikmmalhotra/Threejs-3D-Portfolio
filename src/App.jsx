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
import { useState } from "react";
import { useEffect } from "react";
import { PacmanLoader } from "react-spinners";

const App = () => {

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },8000)
  },[])



  return (
    <BrowserRouter>
    {
      loading ?
      <PacmanLoader
        color="#d67036"
        margin={1}
        size={30}
        loading={loading}
      />

      :

       <div className="relative z-0 bg-primary">
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>

    }
     
    </BrowserRouter>
  );
};

export default App;
