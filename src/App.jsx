import "./App.css";
import { Routes, Route } from 'react-router-dom';
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
import MediaGallery from './pages/About/MediaGallery';
import VideoGallery from './pages/About/VideoGallery';

function App() {
  return (
    <div>
     <Hero />
      <Routes>
        <Route path="/" element={
          <>
          <HeroSlider />
            <Welcome />
            <Message />
            <Dislay />
            <Infra />
            <Teacher />
            <Brands />
            <Gallery />
            <Counter />
            <Review />
            <Events />
          </>
        } />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;