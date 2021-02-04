import React from "react";
import "./BottomSlider.css";
import Card from '../Card/Card'

export default function BottomSilder() {
  return (
    <div className="bottom-slider">
      <div className="card-bottom-container">
       <Card/>
       <Card/>
       <Card/>
      </div>
    </div>
  );
}
