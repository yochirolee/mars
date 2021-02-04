import React, { useState, useEffect, useReducer } from "react";
import BulletsList from "../Bullets/BulletsList";
import "./Slider.css";
import { data } from "../../assets/Data/data";
import SliderInfo from "./SliderInfo";
import BottomSilder from "../BottomSlider/BottomSlider";

const initialState = {
  slides: data,
  activeSlide: data[0],
  totalSlides: data.length,
};

function reducer(state, action) {
  switch (action.type) {
    case "setActive":
      state.slides.map((e) => (e.isActive = false));
      state.slides[action.payload].isActive = true;
      state.index = action.payload;
      return {
        slides: state.slides,
        activeSlide: state.slides[state.index],
        totalSlides: state.totalSlides,
      };

    default:
      throw new Error();
  }
}

export default function Slider() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActive = (index) => {
    dispatch({ type: "setActive", payload: index });
  };

  const handleNext = () => {
    let index = state.slides.indexOf(state.activeSlide);
    index++;
    if (index < state.slides.length)
      dispatch({ type: "setActive", payload: index });
  };
  const handlePrev = () => {
    let index = state.slides.indexOf(state.activeSlide);
    index--;
    if (index >= 0) dispatch({ type: "setActive", payload: index });
  };

  return (
    <div className="slider-wrapper">
      <div className={`bg-container ${state.activeSlide.bg}`}>
        <div className="nav-indicators" >
          <div onClick={handlePrev} className="nav-left"></div>
          <div onClick={handleNext} className="nav-right"></div>
        </div>
        <SliderInfo activeSlide={state.activeSlide} />
        <BulletsList bullets={state.slides} setActive={setActive} />
      </div>
      <div className="bottom-overlay"></div>
      <BottomSilder />
    </div>
  );
}
