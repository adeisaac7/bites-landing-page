import React from "react";
import MaleProfilePic from "../Assets/male.png";
import FemaleProfilePic from "../Assets/female.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p style={{fontFamily:'Beckman Demons', fontSize:'2.5rem',letterSpacing:'5px'}}className="primary-subheading">REVIEWS</p>
        <h1 className="primary-heading">Customers Love Us</h1>
        <p className="primary-text">
        Don't just take our word for it - hear what our happy customers say
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={MaleProfilePic} alt="Happy customer" />
        <p>
        "The food arrives hot and fresh every time. I've ordered 3 times this week already - it's that good!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Michael, Lagos</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={FemaleProfilePic} alt="Happy customer" />
        <p>
        "I was skeptical about food delivery, but their jollof rice tastes just like my grandma's! Now I order twice a week."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Amina, Abuja</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={MaleProfilePic} alt="Happy customer" />
        <p>
        "The pepper soup saved me during my last cold. Delivered in 25 minutes and still piping hot!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Chike, Port Harcourt</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={FemaleProfilePic} alt="Happy customer" />
        <p>
        "Their moi moi is legendary! I don't cook weekends anymore thanks to their affordable meals."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Funke, Ibadan</h2>
      </div>
    </div>
  );
};

export default Testimonial;
