"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import messageIcon from "./icon.png"
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";



const Navbar = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch('./Navbar.json')
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <div id="header" style={{ fontSize: "10px", lineHeight: "1.2", backgroundColor: "rgba(241,87,77,1)", paddingTop: "20px", paddingRight: "100px", paddingLeft: "100px" }}>
        <div style={{ overflow: "hidden", paddingBottom: "25px" }}>
          <h1 className="moving-text" style={{ textAlign: "center", whiteSpace: "nowrap" }}>{data.header}</h1>
        </div>
        <div style={{ textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "7px" }}>
            <p style={{ fontWeight: "400", fontSize: "13px" }}>{data.collaboration}</p>
            <p style={{ fontSize: "13px" }}>
              <span> <FaRegEnvelope /> </span>
              <a href={`mailto:${data.email}`} style={{ paddingLeft: "2px" }}>{data.email}</a></p>
          </div>
          <div>
            {/* <button>First</button>
            <button>First</button>
            <button>First</button> */}
          </div>
        </div>
        {/* <div className="buttons">
        {data.buttons.map((button, index) => (
          <a key={index} href={button.link}>{button.text}</a>
        ))}
      </div> */}
      </div>
      <nav id="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "100px", paddingLeft: "100px" }}>
        <div>
          <Image
            src={messageIcon}
            alt="go top"
            width={240}
            height={120}
          // onClick={() => goToBookingSection()}
          />
        </div>
        <div>
          {data.menu.map((item, index) => (
            <a
              key={index}
              href="#"
              style={{
                fontWeight: 400,
                fontSize: "14px",
                textDecoration: "none",
                padding: "5px",
                border: "2px solid transparent",
                transition: "border 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.border = "2px solid #E94B3C"}
              onMouseLeave={(e) => e.target.style.border = "1px solid transparent"}
            >
              {item}
            </a>
          ))}
        </div>

      </nav>
    </div>

  );
}

export default Navbar;


let data = {
  "header": "Approved By Gramin Skill Development Mission (GSDM)",
  "collaboration": "A Collaboration with Merchant Navy Help Desk",
  "email": "info@northindiamarineacademy.in",
  "buttons": [
    {
      "text": "EXAM HALL TICKET",
      "link": "#"
    },
    {
      "text": "APPOINTMENT LETTER",
      "link": "#"
    },
    {
      "text": "SELECTION LETTER",
      "link": "#"
    }
  ],
  "menu": [
    "HOME",
    "FLEET",
    "MERCHANT NAVY COURSES",
    "PLACEMENT",
    "GALLERY",
    "APPLY",
    "CONTACT"
  ]
}
