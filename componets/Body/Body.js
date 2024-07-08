"use client"
import React, { useState, useEffect }  from 'react'
import "./Body.css"
import Image from "next/image";
import messageIcon from "./GSDM-400x400.png"
import messageIcon1 from "./Images/2.jpg"
import messageIcon2 from "./Images/3.jpg"
import messageIcon3 from "./Images/4.jpg"
import messageIcon4 from "./Images/5.jpg"
import messageIcon5 from "./Images/6.jpg"
import { Button, Image } from "react-bootstrap"; 



const Body = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([
        messageIcon1,
        messageIcon2,
        messageIcon3,
        messageIcon4,
        messageIcon5,
      ]);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 5000); // Change image every 5 seconds
    
        return () => clearInterval(interval);
      }, [images.length]);

      const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
    
      const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };


    return (
        <div>
            {/* This is the first div for images */}
            <div style={{ width: '100%', height: '500px', position: 'relative' }}>
                <Image
                    src={messageIcon2}
                    alt="go top"
                    layout="responsive"
                    width={100}
                    height={500}
                    // onClick={() => goToBookingSection()}
                />
            </div>
            {/* Approval Div */}
            <div className='body display' style={{ paddingRight: "100px", paddingLeft: "100px", gap: "25px" }}>
                {/* Image div */}
                <div>
                    <Image
                        src={messageIcon}
                        alt="go top"
                        width={300}
                        height={300}
                    />
                </div>
                {/* Text dic */}
                <div style={{ width: "700px" }}>
                    <div>
                        <h1 style={{ fontSize: "31px", lineHeight: "1.2", color: "rgba(255,255,255,1)" }}>
                            Approved By Gramin Skill Development Mission (GSDM)
                        </h1>
                    </div>
                    <div style={{ margin: "20px 0" }} />
                    <div style={{ color: "rgba(255,255,255,1)", fontSize: "14px" }}>
                        <p style={{ lineHeight: "1.8", }}>
                            We’re thrilled to announce that
                            <em>
                                <strong>
                                    North India Marine Academy is now officially approved by the Gramin Skill Development Mission (GSDM)!
                                </strong>
                            </em>
                            This milestone reflects our unwavering commitment to providing top-notch marine education and skill development programs that meet the highest standards. Our partnership with GSDM opens up a plethora of opportunities for rural youth, equipping them with the necessary skills to thrive in the marine sector. Join us as we embark on this exciting journey to empower and transform the lives of our students. Welcome aboard!
                        </p>
                    </div>
                </div>
            </div>
            {/* NIMA- North India Marine Academy */}
            <div>
                NIMA- North India Marine Academy
            </div>
            {/* Interface Friendly Learning At */}
            <div className='Interface display' style={{ paddingRight: "120px", paddingLeft: "120px", gap: "25px", flexDirection: "column" }}>
                <div style={{ color: "white", lineHeight: "1.2", fontSize: "48px", fontWeight: "700", margin: "0" }}>Interface Friendly Learning At</div>
                <div style={{ color: "white", fontSize: "22px", lineHeight: "30px", marginBottom: "20px" }}>NIMA- North India Marine Academy</div>
                <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "12px" }}>NIMA is an independent Crew management & Maritime training company which is incorporated with Govt. of India and ISO Certified 9001:2015 by group that offers a comprehensive range of high quality marine services. We are committed to highest level of quality, professionalism and strong credibility as a proactive, forward thinking marine manpower Employment Company. Our core competence is in training and manning. We are committed to training of general purpose ratings by imparting hands on training on all important aspects of good seamanship practices and general maintenance of the engine of the ship. Our ultimate goal is to provide well trained and qualified ratings to the shipping industry, which certainly is the need of every ship owner today world- wide.</div>
                <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "12px" }}>North India Marine Academy is dedicated to select and train young Youth to level of high competence that allows them, to serve on any type of vessel in the world through clearing IMU-CET & Pre sea training. At North India Marine Academy We understand that a Preparatory Class is only as Effective as the Teacher teaching it, and all of our Tutors have Superior Educational and Maritime Professional Qualifications.</div>
            </div>
            {/* Our Students Love Us */}
            <div>
                Our Students Love Us
            </div>
        </div>
    )
}

export default Body