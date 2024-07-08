"use client"

import React, { useEffect, useState } from 'react';
import './footer.css'; // Ensure your CSS file is properly linked
import footerData from "../../public/Foooter.json"
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";


const Footer = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch(footerData)
  //     .then(response => response.json())
  //     .then(data => setData(data));
  // }, []);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <footer>
      <div className="footer-content" style={{border:"2px solid black",  paddingRight: "100px", paddingLeft: "100px", display: "flex"}}>
        <div style={{ border: "2px solid red", width:"33.33%"}}>
          <h3 style={{ color: "white", fontSize: "22px", lineHeight: "1.2", marginTop:"12", marginBottom:"11px"}}>İstanbul Branch</h3>
          <p>Kılıçali Paşa, Meclis-i Mebusan Cd. No:29, 34425, Beyoğlu/İstanbul, Türkiye</p>
        </div>
        <div style={{ border: "2px solid green"}}>
          Content 2
        </div>
        <div style={{ border: "2px solid blue"}}>
          Content 3
        </div>      
      </div>
      <div className="footer-bottom" style={{ height:"70px", display: "flex", justifyContent: "space-between", paddingRight: "100px", paddingLeft: "100px", alignItems:"center", color:"rgba(166,176,179,1)", backgroundColor:"#102340" }}>
        <div style={{marginBottom:"0px", marginTop:"0px", fontSize:"15px"}}>{data.footerNote}</div>
        <div style={{ display: "flex", gap: "20px" }}>
          <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              textDecoration: "none"
            }}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="social-icon">
              <CiFacebook style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
            </span>
            <span className="social-circle"></span>
          </a>
          <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              textDecoration: "none"
            }}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="social-icon">
              <CiTwitter style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
            </span>
            <span className="social-circle"></span>
          </a>
          <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              textDecoration: "none"
            }}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="social-icon">
              <FaInstagram style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
            </span>
            <span className="social-circle"></span>
          </a>
          <a className="fusion-social-network-icon fusion-tooltip fusion-facebook awb-icon-facebook"
            style={{
              position: "relative",
              display: "inline-block",
              overflow: "hidden",
              textDecoration: "none"
            }}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span className="social-icon">
              <AiOutlineYoutube style={{ fontSize: "24px", color: "rgba(166,176,179,1)" }} />
            </span>
            <span className="social-circle"></span>
          </a>
        </div>
      </div>
    </footer>
  );
};

// rgba(61,76,104,1)

export default Footer;

let data = {
  "branches": [
    {
      "title": "İstanbul Branch",
      "addressLines": [
        "Kılıçali Paşa, Meclis-i Mebusan Cd. No:29, 34425",
        "Beyoğlu/İstanbul, Türkiye"
      ]
    },
    {
      "title": "Dubai Branch",
      "addressLines": [
        "Latifa Tower – Trade Centre – Trade Centre 1 – Dubai – United Arab Emirates"
      ]
    }
  ],
  "contacts": [
    "Office Address: 2nd floor near bahadurgarh city metro station piller no 839 above Punjab national bank bahadurgarh -124507",
    "Mumbai Branch: Office no- 606, Plot no 13, Shah Prima, opp. Glomax Mall, Sector 2, Kharghar, Navi Mumbai, Maharashtra 410210, India",
    "Phone: 8571964292",
    "Email: (For Admission or Exam related) Admin@northindiamarineacademy.in",
    "(For Job Related) career@northindiamarineacademy.in",
    "info@northindiamarineacademy.in"
  ],
  "footerNote": "© Copyright 2024 | NIMA | All Rights Reserved | Designed by Framemysite"
}

/**
 <div>
          {data.branches.map((branch, index) => (
            <div key={index} className="footer-section">
              <h3 style={{lineHeight:"1.2"}}>{branch.title}</h3>
              {branch.addressLines.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          ))}
        </div>
        
        
        <div>
          <div className="footer-section">
            {data.contacts.map((contact, index) => (
              <p key={index}>{contact}</p>
            ))}
         </div>
        </div>
 */

