"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import logo from "../../public/Navbar/icon.png"
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link'
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
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
                    <Link href={button.link}>{button.text}</Link>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <nav id="navbar">
        <div className='logo-menu-wrapper'>
          <Image
            className='logo-main'
            src={logo}
            alt="go top"
            width={240}
            height={120}
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="fusion-custom-menu fusion-menu-element-list">
          {data.menu.map((item) => (
            <span className="fusion-menu-item" key={item.id}>
              <span className="transition-center-grow"></span>
              <Link href={item.link}>
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
                    <Link key={subItem.id} href={subItem.link}>
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
  "email": "info@northindiamarineacademy.in",
  "buttons": [
    {
      "id": "1",
      "text": "EXAM HALL TICKET",
      "link": "http://localhost:3000/hallticket"
    },
    {
      "id": "2",
      "text": "APPOINTMENT LETTER",
      "link": "http://localhost:3000/"
    },
    {
      "id": "3",
      "text": "SELECTION LETTER",
      "link": "http://localhost:3000/"
    }
  ],
  "menu": [
    {
      "id": "1",
      "text": "HOME",
      "link": "http://localhost:3000/",
      "subOption": []
    },
    {
      "id": "2",
      "text": "FLEET",
      "link": "http://localhost:3000/",
      "subOption": []
    },
    {
      "id": "3",
      "text": "MERCHANT NAVY COURSES",
      "link": "http://localhost:3000/",
      "subOption": [
        {
          "id": "1",
          "text": "STCW BASIC COURSE",
          "link": "http://localhost:3000/"
        },
        {
          "id": "2",
          "text": "TRAINEE MARINE ENGINEERS",
          "link": "http://localhost:3000/"
        },
        {
          "id": "3",
          "text": "GP RATING",
          "link": "http://localhost:3000/"
        },
        {
          "id": "4",
          "text": "DNS COURSE",
          "link": "http://localhost:3000/"
        },
        {
          "id": "5",
          "text": "BSC NAUTICAL SCIENCE",
          "link": "http://localhost:3000/"
        },
        {
          "id": "6",
          "text": "GRADUATE MECHANICAL ENGINEER",
          "link": "http://localhost:3000/"
        },
      ]
    },
    {
      "id": "4",
      "text": "GALLERY",
      "link": "http://localhost:3000/",
      "subOption": []
    },
    {
      "id": "5",
      "text": "CONTACT",
      "link": "http://localhost:3000/",
      "subOption": []
    },
  ]
}
