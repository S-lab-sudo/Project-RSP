import React from "react";
import "./Donate.css";
import e from './img/e.jpg'
import g from './img/g.png'
import i from './img/i.png'
import k from './img/k.png'
import p from './img/p.png'

export default function Donate() {
  return (
    <div className="centeredDiv">
      <div className="donateMC">
        <div className="sendMoneyWith">
          <label htmlFor="">Send Money With</label>
        </div>
        <div className="global">
          <div className="gofund">
            <div className="imag"><img src={g} alt="" /></div>
            <div className="text">GoFundMe</div>
          </div>
          <div className="paypal">
            <div className="imag"><img src={p} alt="" /></div>
            <div className="text">PayPal</div>
          </div>
        </div>
        <div className="local">
          <div className="khalti">
            <div className="imag"><img src={k} alt="" /></div>
            <div className="text">Khalti</div>
          </div>
          <div className="esewa">
            <div className="imag"><img src={e} alt="" /></div>
            <div className="text">eSewa</div>
          </div>
          <div className="imepay">
            <div className="imag"><img src={i} alt="" /></div>
            <div className="text">IME pay</div>
          </div>
        </div>
      </div>
    </div>
  );
}
