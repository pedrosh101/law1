import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

import Map from "./components/Map";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <About />
        <Map />
        <Footer />
      </Router>
    </>
  );
}

export default App;
