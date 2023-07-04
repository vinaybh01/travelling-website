import React from "react";
import CardItem from "./CardItem";
import "./Cardstwo.css";
import Travel2 from "./images/photo-1500530855697-b586d89ba3ee.avif";
import Travel3 from "./images/photo-1461723198950-3f65e13bb031.avif";
import Travel4 from "./images/img-4.jpg";
import Travel5 from "./images/img-5.jpg";
import Travel6 from "./images/img-6.jpg";

function Cards() {
  return (
    <div className="destination">
      <h1>Check out these POPULAR Destinations!</h1>
      <p>Tours gives you the opportunity to see a lot, within a time fram.</p>
      <div className="first-des">
        <div className="des-text">
          <h2>Taal volcano, Batanas</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            veritatis eos laudantium rerum nesciunt nostrum deleniti, nihil
            excepturi labore ipsam laborum officia similique ab dignissimos
            perferendis porro obcaecati hic ex voluptatum? Alias, sunt nam!
            Minus libero vitae ab? Sequi, officiis!
          </p>
        </div>
        <div className="des-img">
          <img src={Travel3} alt="travel image" />
          <img src={Travel2} alt="travel image" />
        </div>
      </div>
    </div>
  );
}

export default Cards;
