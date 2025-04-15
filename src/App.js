import { useState, useEffect } from 'react';
import './App.css';
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer";
import LoadingScreen from './Components/LoadingScreen'
import ScrollToTop from "./Components/ScrollToTop"
import {ThemeProvider} from './contexts/ThemeContext'


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <ThemeProvider>
      <div className="App">
        {loading ? (
          <LoadingScreen/>
        ): (
        <>
          <ScrollToTop/>
          <Home />
          <About />
          <Work />
          <Testimonial />
          <Contact />

          <div className="footer-container">
            <Footer />
          </div>
        </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
