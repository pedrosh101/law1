import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <About />
        <Cards />
        <Footer />
      </Router>
    </>
  );
}

export default App;
