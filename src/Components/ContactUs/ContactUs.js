import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contactus centeredDiv">
      <div className="contactUsMC centeredDiv">
        <div className="holder44">
          <div className="flName">
            <input className="firstname" type="text" placeholder="FirstName" />
            <input className="lastname" type="text" placeholder="LastName" />
          </div>
          <div className="email">
            <input type="email" placeholder="EmailAddress" />
          </div>
          <div className="message">
            {/* <input type='text' placeholder='Message' /> */}
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="sendMessage">
            <button className="sendmessage">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}
