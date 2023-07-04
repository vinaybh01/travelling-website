import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cardstwo() {
  return (
    <div className="cards">
      <h1 className="heading-size">Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              name="Manali"
              src="images/manali2.avif"
              text="With spectacular valleys, breathtaking views, snowcapped mountains, and lush forests of oak, deodar, and pine, Manali is a magical hill station at the northern end of Kullu valley in Himachal Pradesh."
              label="Adventure"
              path="/services"
            />
            <CardItem
              name="Leh Ladakh"
              src="images/ladakh.avif"
              text="Ladakh is a union territory in the Kashmir region of India. Formerly falling in the state of Jammu & Kashmir, Ladakh was administered a union territory on 31st October 2019."
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              name="Andaman"
              src="images/andaman.avif"
              text="Replete with turquoise blue water beaches and a bit of history, Andaman & Nicobar Islands is a little slice of paradise tucked around 1,400 km away from the east coast of mainland India."
              label="Luxury"
              path="/services"
            />
            <CardItem
              name="Udaipur"
              src="images/udaipur.avif"
              text="Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan."
              label="Mystery"
              path="/products"
            />
            <CardItem
              name="Jaipur"
              src="images/jaipur.avif"
              text="Also called the Pink City, Jaipur is the capital of the royal state of Rajasthan. Along with Delhi and Agra"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              name="Kerala"
              src="images/kerala.avif"
              text="Vagamon in Kerala is this prized treasure that is wrapped away from the hustling cities around. This place is a beautiful hill station cuddled amidst the Kottayam and Idukki regions which are not even usual amongst the locals."
              label="Mystery"
              path="/services"
            />
            <CardItem
              name="Uttarakhand"
              src="images/utt.avif"
              text="Also familiar with the name “Skiing Paradise of Garhwal”, Auli is this quaint ski destination in the Garhwal district of Uttarakhand"
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardstwo;
