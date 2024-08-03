import "./App.css";
import Brands from "./components/Brands";
import Counter from "./components/Counter";
import Dislay from "./components/Dislay";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import HeroSlider from "./components/HeroSlider";

import Infra from "./components/Infra";
import Message from "./components/Message";
import Review from "./components/Review";
import Teacher from "./components/Teacher";

import Welcome from "./components/Welcome";


function App() {
  return (
    <>
      <div>
        <Hero/>
        <HeroSlider/>
        
        <Welcome />
        <Message />
        <Dislay />
        <Infra />
        <Teacher />
        <Brands/>
        <Gallery/>
        <Counter/>
        <Review/>
        <Events/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
