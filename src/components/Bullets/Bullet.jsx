import React from "react";

export default function Bullet({ setActive, bullet, index }) {
  return (
    <div
      className={bullet.isActive ? "bullet-active" : "bullet"}
      onClick={() => setActive(index)}
    ></div>
  );
}
