import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Assets } from "../../utils/Assets";
import './slider.scss';

export const AppSlider = () => {
  return (
    <div className="slider">
      <AwesomeSlider>
        <div className="slider-container-slide">
          {/* Your first slide content */}
          <img src={Assets.errorImage} alt="Slide 1" />
        </div>
        <div className="slider-container-slide">
          {/* Your second slide content */}
          <img src={Assets.NotImage} alt="Slide 2" />
        </div>
        <div className="slider-container-slide">
          {/* Your second slide content */}
          <img src={Assets.successImage} alt="Slide 2" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

