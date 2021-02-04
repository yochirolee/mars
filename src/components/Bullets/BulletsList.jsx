import React from "react";
import Bullet from "./Bullet";
import './Bullet.css';

export default function BulletsList({bullets,setActive}) {
  return (
    <div className="bullets-container">
          {
              bullets.map (bullet=>
                <Bullet key={bullets.indexOf(bullet)} bullet={bullet} index={bullets.indexOf(bullet)}  setActive={setActive}/>
                )
          }
    </div>
  );
}
