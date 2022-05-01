import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [path, setPath] = useState([
    "/",
    "/goals",
    "/ourdogs",
    "/helpadog",
    "/contactus",
  ])
  const [pathName, setpathName] = useState([
    'Home','Goals','Our Dogs','Help a Dog','Contact Us'
  ])
  let pageno = window.location.pathname;
  console.log(pageno===path[0])
  // path.map((v,i)=>{
  //   return <Link className={v===pageno?"green":"blakish"}`} to={path[0]}>v</Link>
  // })
  return (
    <div className="navBar centeredDiv">
      <ul>
      {path.map((v,i)=>{
        console.log(v);
        return <li><Link onClick={()=>setPath([...path])} key={i} className={v===pageno?"black1":"black2"} to={path[i]}>{pathName[i]}</Link></li>
      })}

        {/* <li>
          <Link className={pageno===path[0]?"green":"blakish"} to={path[0]}>Home</Link>
        </li>
        <li>
          <Link to={path[1]}>Goals</Link>
        </li>
        <li>
          <Link to={path[2]}>Our Dogs</Link>
        </li>
        <li>
          <Link to={path[3]}>Help a Dog</Link>
        </li>
        <li>
          <Link to={path[4]}>Contact Us</Link>
        </li> */}
      </ul>
    </div>
  );
}
