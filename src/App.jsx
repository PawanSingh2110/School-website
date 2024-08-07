import "./App.css";

import Footer from "./components/Footer";

import Hero from "./components/Hero";
import About from "./pages/About/About";
import Home from "./pages/home/Home";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Hero />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About/>}/>
        </Routes>
        

        <Footer />
      </div>
    </>
  );
}

export default App;
