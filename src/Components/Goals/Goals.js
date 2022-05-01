import React from "react";
import "./Goals.css";
import im1 from "./img/1.png";
import im2 from "./img/2.png";
import im3 from "./img/3.png";
import im4 from "./img/4.png";
import im5 from "./img/5.png";

export default function Goals() {
  return (
    <div className="centeredDiv">
      <div className="goalsMC">
        <div className="getDonation">
          <div className="leftMotto">
            <h2>Get Donation</h2>
            <div className="desc">
              We get donation from different doners around the world.
            </div>
          </div>
          <div className="rightImg">
            <img src={im5} alt="" />
          </div>
        </div>
        <div className="dHelath">
          <div className="leftImg">
            <img src={im1} alt="" />
          </div>
          <div className="rightMotto">
            <h2>Dog's Health</h2>
            <div className="desc">
              We use maximum of our donation to nurture dog's health and well
              being.
            </div>
          </div>
        </div>
        <div className="spay">
          <div className="leftMotto">
            <h2>Spay or Neuter</h2>
            <div className="desc">
              We organize various campaigns where we take help of vetenery
              doctors for spaying and neutring dogs which helps in the birth
              control of strays.
            </div>
          </div>
          <div className="rightImg">
            <img src={im2} alt="" />
          </div>
        </div>
        <div className="lastContainer">
          <div className="serviceDog1">
            <div className="upImg centeredDiv">
              <img src={im3} alt="" />
            </div>
            <div className="downMotto">
              <h2>Service dogs</h2>
              <div className="desc">
                We send our dogs to be well trained as best service dogs, which
                can help in different field like police, military, etc and help
                differently abled people.
              </div>
            </div>
          </div>
          <div className="Adoption centeredDiv">
            <div className="upImg">
              <img src={im4} alt="" />
            </div>
            <div className="downMotto">
              <h2>Adoption</h2>
              <div className="desc">
              One can visit our dog shelter and adopt our dog rather than buying.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
