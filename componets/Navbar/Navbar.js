"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../public/Navbar/icon.png"
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
      <div id="header">
        <div className="moving-text-wrapper">
          <h1 className="moving-text">{data.header}</h1>
        </div>
        <div className='navbar-wrapper'>
          <div className='info-container'>
            <p style={{ fontWeight: "400", fontSize: "13px" }}>{data.collaboration}</p>
            <p style={{ fontSize: "13px" }}>
              <span> <FaRegEnvelope /> </span>
              <a href={`mailto:${data.email}`} style={{ paddingLeft: "2px" }}>{data.email}</a></p>
          </div>
          <div className="button_container">
            <button className="button_primary button_icon">Exam Hall Ticket</button>
            <button className="button_primary button_icon">Appointment Letter</button>
            <button className="button_primary button_icon">Selection Letter</button>
          </div>
        </div>
        {/* <div className="buttons">
        {data.buttons.map((button, index) => (
          <a key={index} href={button.link}>{button.text}</a>
        ))}
      </div> */}
      </div>
      <nav id="navbar">
        <div className='logo-menu-wrapper'>
          <Image
            className='logo-main'
            src={logo}
            alt="go top"
            width={240}
            height={120}
          // onClick={() => goToBookingSection()}
          />
        </div>
        <div className="fusion-custom-menu fusion-menu-element-list">
          {data.menu.map((item, index) => (
            <span className="fusion-menu-item">
              <span className="transition-center-grow"></span>
              <a
                key={index}
                href="#"
              // onMouseEnter={(e) => e.target.style.border = "2px solid #E94B3C"}
              // onMouseLeave={(e) => e.target.style.border = "1px solid transparent"}
              >
                {item}
              </a>
            </span>
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
