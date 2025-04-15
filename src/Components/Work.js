import React, { useState } from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const [activeCard, setActiveCard] = useState(null);
  
  const workInfoData = [
    {
      image: PickMeals,
      title: "Browse Our Menu",
      text: "50+ chef-crafted meals ready in minutes",
    },
    {
      image: ChooseMeals,
      title: "Fast Delivery",
      text: "At your doorstep in 30 minutes or less",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p style={{fontFamily:'Beckman Demons', fontSize:'2.5rem',wordSpacing:'20px'}} className="primary-subheading">HOW IT WORKS</p>
        <h1 className="primary-heading">Fresh Meals in 3 Simple Steps</h1>
        <p className="primary-text">
          Get restaurant-quality food without the wait or hassle

        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div 
            className={`work-section-info ${activeCard === index ? 'active' : ''}`} 
            key={data.title}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
            {activeCard === index && (
              <button className="secondary-button small-button">Order Now</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;