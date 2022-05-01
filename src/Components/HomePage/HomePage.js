import React from "react";
import "./HomePage.css";
import rightImg from "./rightImg.png";
import Colisor1 from "./coloisor/1.png";
import Colisor2 from "./coloisor/2.jpg";
import Colisor3 from "./coloisor/3.jpg";
import { useNavigate } from 'react-router-dom';


export default function HomePage() {
  const navigate = useNavigate();
  const handleAdvise=()=>{
    
  }
  return (
    <div className="homePageContainer centeredDiv">
      <div className="homePage1">
        <div className="homeLeftQuote centeredDiv">
          <div className="mainMottoDiv">
            <label className="mainMotto">
              Let's help Street Dogs
              <label className="by" htmlFor="">
                &nbsp; by
              </label>
            </label>
            <div className="points">
              <ol>
                <li>Curing</li>
                <li>Feeding</li>
                <li>Nuturing</li>
                <li>Sheltering</li>
                <li>Or you can </li>
              </ol>
            </div>
            <div className="firstBlockButtons">
              <div className="advise">
                {" "}
                <button onClick={()=>navigate('/contactus')} >Advise</button>
              </div>
              <hr />
              <div className="donate">
                <button onClick={()=>navigate('/donate')} >Donate</button>
              </div>
            </div>
          </div>
        </div>
        <div className="homeRightImage">
          <img src={rightImg} alt="" />
        </div>
      </div>
      <div className="homePage2 centeredDiv">
        <div className="holder">
          <div className="homePage2LeftContext centeredDiv">
            <label htmlFor="">
              We are a non-profit organizations, seeking to help the street dog
              feel{" "}
              <label className="brownish" htmlFor="">
                safe & home
              </label>{" "}
              all around Nepal. The problems that rises due to overlook or
              discare of street dog (Accident, humilation of street dogs, Flow
              of diseases, Creation of new disease, etc) influnces to us, human
              beings. So, in the sense of humanity,{" "}
              <label className="brownish" htmlFor="">
                {" "}
                we need to love & take care of them.
              </label>
            </label>
          </div>
          <div className="homePage2RightContext centeredDiv">
            <div className="holder1 centeredDiv">
              <label className="how" htmlFor="">
                How your donation is being utilized?
              </label>
              <button className="checkNow">Check Now !</button>
            </div>
          </div>
        </div>
      </div>
      <div className="homePage3 centeredDiv">
        <div className="holder2 centeredDiv">
          <h1>We train Stray dogs to help people physically and mentally</h1>
          <div className="colisor">
            <div className="slider" id="slider">
              <img src={Colisor1} width="100%" alt="" />
              <img src={Colisor2} width="100%" alt="" />
              <img src={Colisor3} width="100%" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
