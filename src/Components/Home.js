import React, { useEffect, useState } from 'react'
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from './Navbar';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={`home-container ${loaded ? 'fade-in' : ''}`}>
      <Navbar/>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section slide-up">
          <h1 className="primary-heading">
          More Than a Meal – An Experience
          </h1>
          <p className="primary-text">
          Every recipe is tested by our executive chef with one goal: 
          making restaurant-quality food accessible to everyone.

          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" className="slide-up" />
        </div>
      </div>
    </div>
  )
}

export default Home