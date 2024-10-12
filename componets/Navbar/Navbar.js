"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../public/Navbar/logo.png"
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";


const Navbar = ({ host }) => {
  const goToBookingSection = () => {
    const bookingSection = document.getElementById('goToTop');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
  };

  return (
    <div className='header-wrapper'>
      <div id="header">
        <div className="navbar-container">
          <div className="moving-text-wrapper">
            <h1 className="moving-text" id='goToTop'>{data.header}</h1>
          </div>
          <div className='navbar-wrapper'>
            <div className='info-container'>
              <p style={{ fontWeight: "400", fontSize: "13px" }}>{data.collaboration}</p>
              <p style={{ fontSize: "13px" }}>
                <span> <FaRegEnvelope /> </span>
                <a href={`mailto:${data.email}`} style={{ paddingLeft: "2px" }}>{data.email}</a></p>
            </div>
            {data?.buttons?.length > 0 && (
              <div className="button_container">
                {data.buttons.map((button) => (
                  <button key={button.id} className="button_primary button_icon">
                    <Link href={button.link === "" ? host : `${host}${button.link}`}>{button.text}</Link>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <nav id="navbar">
        {/* <div className='logo-menu-wrapper'>
          <Image
            className='logo-main'
            src={logo}
            alt="go top"
            width={200}
            height={150}
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          />
        </div> */}
        <a href={host}>
          <Image
            className='logo-main'
            src={logo}
            alt="go top"
            width={200}
            height={150}
            style={{ cursor: 'pointer' }}
          />
        </a>
        <div className="fusion-custom-menu fusion-menu-element-list">
          {data.menu.map((item) => (
            <span className="fusion-menu-item" key={item.id}>
              <span className="transition-center-grow"></span>
              <Link href={item.link == "" ? host : `${host}${item.link}`}>
                {item.subOption?.length > 0 ? (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}>
                    {item.text} <IoIosArrowDown />
                  </div>
                ) : (
                  item.text
                )}
              </Link>
              {item.subOption?.length > 0 && (
                <div className="sub-menu">
                  {item.subOption.map((subItem) => (
                    <Link key={subItem.id} href={subItem.link === "" ? host : `${host}${subItem.link}`}>
                      {subItem.text}
                    </Link>
                  ))}
                </div>
              )}
            </span>

          ))}
        </div>
      </nav>
      <section
        className="to-top-container to-top-right"
        aria-labelledby="awb-to-top-label"
      >
        <button
          id="toTop"
          className="fusion-top-top-link fusion-to-top-active"
          onClick={() => goToBookingSection()}
        >
          <span id="awb-to-top-label" className="screen-reader-text">
            Go to Top
          </span>
        </button>
      </section>
    </div>
  );
}

export default Navbar;


let data = {
  "header": "Approved By Gramin Skill Development Mission (GSDM)",
  "collaboration": "A Collaboration with Merchant Navy Help Desk",
  "email": "msymarineacademy@gmailcom",
  "buttons": [
    {
      "id": "1",
      "text": "EXAM HALL TICKET",
      "link": `/hallticket`
    },
    {
      "id": "2",
      "text": "APPOINTMENT LETTER",
      "link": ""
    },
    {
      "id": "3",
      "text": "SELECTION LETTER",
      "link": ""
    }
  ],
  "menu": [
    {
      "id": "1",
      "text": "HOME",
      "link": "",
      "subOption": []
    },
    {
      "id": "2",
      "text": "FLEET",
      "link": "",
      "subOption": []
    },
    {
      "id": "3",
      "text": "MERCHANT NAVY COURSES",
      "link": "",
      "subOption": [
        {
          "id": "1",
          "text": "STCW BASIC COURSE",
          "link": ""
        },
        {
          "id": "2",
          "text": "TRAINEE MARINE ENGINEERS",
          "link": ""
        },
        {
          "id": "3",
          "text": "GP RATING",
          "link": ""
        },
        {
          "id": "4",
          "text": "DNS COURSE",
          "link": ""
        },
        {
          "id": "5",
          "text": "BSC NAUTICAL SCIENCE",
          "link": ""
        },
        {
          "id": "6",
          "text": "GRADUATE MECHANICAL ENGINEER",
          "link": ""
        },
      ]
    },
    {
      "id": "4",
      "text": "GALLERY",
      "link": "",
      "subOption": []
    },
    {
      "id": "5",
      "text": "CONTACT",
      "link": "",
      "subOption": []
    },
  ]
}
