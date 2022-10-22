import React from "react";
import "./Home.css";
import Rectangle from "../Image/Rectangle 1.png";
import Sreemongol from "../Image/Sreemongol.png";
import sundarbans from "../Image/sundorbon.png";

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>Cox's Bazar</h1>
      </div>
      <div>
        <div class="slide-container">
          <span class="slider-span" id="slider-span1"></span>
          <span class="slider-span" id="slider-span2"></span>
          <span class="slider-span" id="slider-span3"></span>

          <div class="image-slider">
            <div class="slides-div" id="slide-1">
              <img src={Rectangle} alt="" class="img" id="img1" />
              <a href="#slider-span1" class="button" id="button-1"></a>
            </div>
            <div class="slides-div" id="slide-2">
              <img src={Sreemongol} alt="" class="img" id="img2" />
              <a href="#slider-span2" class="button" id="button-2"></a>
            </div>
            <div class="slides-div" id="slide-3">
              <img src={sundarbans} alt="" class="img" id="img3" />
              <a href="#slider-span3" class="button" id="button-3"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
