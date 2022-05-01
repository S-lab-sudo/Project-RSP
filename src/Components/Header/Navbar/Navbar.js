import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navBar centeredDiv">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/goals"}>Goals</Link>
        </li>
        <li>
          <Link to={"/ourdogs"}>Our Dogs</Link>
        </li>
        <li>
          <Link to={"/helpadog"}>Help a Dog</Link>
        </li>
        <li>
          <Link to={"/contactus"}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
