import React, { useState } from "react";
import "./HelpADog.css";
import dd from "./dd.png";

export default function HelpADog() {
  const [views, setViews] = useState([false, false, false, false]);
  const handle = (n) => {
    let arr=views.map((e,i)=>{
      if(n===i){
        console.log(e);
        return !e
      }else{
        return e
      }
    })
    console.log(arr);
    setViews(arr);
  };
  return (
    <div className="centeredDiv">
      <div className="helpADogMC">
        <div className="volunteer" onClick={()=>handle(0)}>
          <label htmlFor="">Volunteer</label>
          <img src={dd} alt="" />
          <div
            className={`${views[0] === false ? "hide" : "volunteerContext"}`}
          >
            You can volunteer in the programs that we organize
          </div>
        </div>
        <div className="foster" onClick={()=>handle(1)}>
          <label htmlFor="">Foster</label>
          <img src={dd} alt="" />
          <div className={`${views[1] === false ? "hide" : "fosterContext"}`}>
            You can foster the dogs to control the dogs
          </div>
        </div>
        <div className="participate" onClick={()=>handle(2)}>
          <label htmlFor="">Participate in Events</label>
          <img src={dd} alt="" />
          <div
            className={`${views[2] === false ? "hide" : "participateContext"}`}
          >
            You can partipate in the programs that we organize
          </div>
        </div>
        <div className="donation" onClick={()=>handle(3)}>
          <label htmlFor="">Donation</label>
          <img src={dd} alt="" />
          <div className={`${views[3] === false ? "hide" : "donationContext"}`}>
            You can donate us
          </div>
        </div>
      </div>
    </div>
  );
}
