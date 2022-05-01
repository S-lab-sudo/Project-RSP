import React from "react";
import "./OurDogs.css";
import d1 from './3.jpg'
import d2 from './2.jpg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'

export default function OurDogs() {
  return (
    <div className="centeredDiv">
      <div className="ourDogsMC">
        <h2>Please select the type of dog</h2>
        <div className="dogCardHolder">
          <div className="serviceDog centeredDiv">
            <div className="imag">
              <img src={d1} alt="" />
            </div>
            <div className="heading">
              <h3>Service Dog</h3>
            </div>
            <div className="description">
              The are welll trained
            </div>
          </div>
          <div className="therapyDog centeredDiv">
          <div className="imag">
              <img src={d2} alt="" />
            </div>
            <div className="heading">
              <h3>Therapy Dog</h3>
            </div>
            <div className="description">
              The are welll trained
            </div>
          </div>
        </div>
        <div className="dogs">
          <div className="row1">
            <div className="dog1 dog">
              <div className="dogImg centeredDiv centeredDiv">
                <img src={img1} alt="" />
              </div>
              <div className="btns">
                <div className="buybtn">
                  <button>Buy your companion</button>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="dog2 dog">
              <div className="dogImg centeredDiv">
                <img src={img2} alt="" />
              </div>

              <div className="btns">
                <div className="buybtn">
                  <button>Buy your companion</button>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
            <div className="dog3 dog">
              <div className="dogImg centeredDiv">
                <img src={img3} alt="" />
              </div>

              <div className="btns">
                <div className="buybtn">
                  <button>Buy your companion</button>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row2">
          <div className="dog3 dog">
              <div className="dogImg centeredDiv">
                <img src={img5} alt="" />
              </div>

              <div className="btns">
                <div className="buybtn">
                  <button>Buy your companion</button>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          <div className="dog4 dog">
              <div className="dogImg centeredDiv">
                <img src={img4} alt="" />
              </div>

              <div className="btns">
                <div className="buybtn">
                  <button>Buy your companion</button>
                </div>
                <div className="subscribebtn">
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
