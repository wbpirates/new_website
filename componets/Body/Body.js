"use client"
import React, { useState, useEffect } from 'react'
import "./Body.css"
import Image from "next/image";
import missionIcon from "../../public/GSDM-400x400.png"
import sliderImage1 from "../../public/Slider/2.jpg"
import sliderImage2 from "../../public/Slider/3.jpg"
import sliderImage3 from "../../public/Slider/4.jpg"
import sliderImage4 from "../../public/Slider/5.jpg"
import sliderImage5 from "../../public/Slider/6.jpg"

import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

let data = {
    banner: {
        heading: 'Maritime Marvels Academy',
        subheading: 'A Marine Education Platform',
        linkText: 'Contact Now',
        linkHref: '#'
    },
    images: [
        sliderImage1,
        sliderImage2,
        sliderImage3,
        sliderImage4,
        sliderImage5
    ],
    approvals: {
        icon: missionIcon,
        heading: 'Approved By Gramin Skill Development Mission (GSDM)',
        description: `We’re thrilled to announce that 
            <em>
                <strong>
                    Maritime Marvels Academy is now officially approved by the Gramin Skill Development Mission (GSDM)!
                </strong>
            </em>
            This milestone reflects our unwavering commitment to providing top-notch marine education and skill development programs that meet the highest standards. Our partnership with GSDM opens up a plethora of opportunities for rural youth, equipping them with the necessary skills to thrive in the marine sector. Join us as we embark on this exciting journey to empower and transform the lives of our students. Welcome aboard!`
    },
    academyInfo: {
        heading: 'MMA - Maritime Marvels Academy',
        subheading: 'One of the Best Marine Education Platform',
        cards: [
            {
                imgSrc: 'support.png',
                imgAlt: 'Support',
                title: 'SUPPORT',
                description: 'Our support team work for complete preparation of courses by D.G shipping Govt. of India or RPSL with well versed & experienced mariners team.'
            },
            {
                imgSrc: 'rocket.png',
                imgAlt: 'Hassle Free Process',
                title: 'HASSLE FREE PROCESS',
                description: 'MMA ensures the whole process & preparation to be smooth & glitch-free for both the aspiring candidates & the maritime institutes.'
            },
            {
                imgSrc: 'mission.png',
                imgAlt: 'Mission',
                title: 'MISSION',
                description: 'Your Bright Future under maritime Industry with end-to-end solutions for MARITIME EDUCATION CONSULTANCY & SHIP MANAGEMENT is our core mission.'
            },
            {
                imgSrc: 'vision.png',
                imgAlt: 'Vision',
                title: 'VISION',
                description: 'To provide quality education and maritime consultancy to aspiring as well as existing marine Personnel.'
            }
        ]
    },
    interfaceLearning: {
        heading: 'Interface Friendly Learning At',
        subheading: 'MMA- Maritime Marvels Academy',
        description1: 'MMA is an independent Crew management & Maritime training company which is incorporated with Govt. of India and ISO Certified 9001:2015 by group that offers a comprehensive range of high quality marine services. We are committed to highest level of quality, professionalism and strong credibility as a proactive, forward thinking marine manpower Employment Company. Our core competence is in training and manning. We are committed to training of general purpose ratings by imparting hands on training on all important aspects of good seamanship practices and general maintenance of the engine of the ship. Our ultimate goal is to provide well trained and qualified ratings to the shipping industry, which certainly is the need of every ship owner today world- wide.',
        description2: 'Maritime Marvels Academy is dedicated to select and train young Youth to level of high competence that allows them, to serve on any type of vessel in the world through clearing IMU-CET & Pre sea training. At Maritime Marvels Academy We understand that a Preparatory Class is only as Effective as the Teacher teaching it, and all of our Tutors have Superior Educational and Maritime Professional Qualifications.'
    },
    testimonials: {
        heading: 'Our Students Love Us',
        subheading: 'Don’t Just Take Our Word For It, Read It From Them',
        feedbacks: [
            {
                text: 'Good staff members I have worked with Maritime Marvels Academy they doing very well',
                name: 'Tara Chouhan',
                imgSrc: 'user-image.svg'
            },
            {
                text: 'Absolutely best company for adm. in dg approved colleges and 100% placement guarantee',
                name: 'Tara Chouhan',
                imgSrc: 'user-image.svg'
            },
            {
                text: 'Today i got sponsorship for dns admission through Maritime Marvels Academy rahul sir doing great work they provide good dg college with 100% placement thank u sir',
                name: 'Tara Chouhan',
                imgSrc: 'user-image.svg'
            }
        ]
    }
};


const Body = ({host}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

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
            {/* Image */}
            <div id="image-container">
                <div
                    style={{
                        backgroundImage: `url(${images[currentImageIndex]?.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        zIndex: -1
                    }}
                >
                    <div className='banner_content-wrapper'>
                        <div className='banner_content'>
                            <div className='banner-heading with-bg'>{data.banner.heading}</div>
                            <h3 className='banner-suheading'>A Marine Education Platform</h3>
                            <a className='banner-link with-bg' href='#'>Contact Now</a>
                        </div>
                    </div>
                </div>
                <button
                    onClick={prevImage}
                    className="nav-button previous" // Add className for hover effect
                >
                    <GrPrevious />
                </button>
                <button
                    onClick={nextImage}
                    className="nav-button next" // Add className for hover effect
                >
                    <GrNext />
                </button>
            </div>
            {/* Approval Div */}
            <div className='body display'>
                {/* Image div */}
                <div>
                    <Image
                        src={missionIcon}
                        alt="go top"
                        width={300}
                        height={300}
                    />
                </div>
                {/* Text dic */}
                <div className='text-img-section'>
                    <div>
                        <h1 className='heading primary'>
                            Approved By Gramin Skill Development Mission (GSDM)
                        </h1>
                    </div>
                    <div style={{ margin: "20px 0" }} />
                    <div style={{ color: "rgba(255,255,255,1)", fontSize: "14px" }}>
                        <p style={{ lineHeight: "1.8", }}>
                            We’re thrilled to announce that
                            <em>
                                <strong>
                                    Maritime Marvels Academy is now officially approved by the Gramin Skill Development Mission (GSDM)!
                                </strong>
                            </em>
                            This milestone reflects our unwavering commitment to providing top-notch marine education and skill development programs that meet the highest standards. Our partnership with GSDM opens up a plethora of opportunities for rural youth, equipping them with the necessary skills to thrive in the marine sector. Join us as we embark on this exciting journey to empower and transform the lives of our students. Welcome aboard!
                        </p>
                    </div>
                </div>
            </div>
            {/* MMA- Maritime Marvels Academy */}
            <div className="container">
                <h1>MMA - Maritime Marvels Academy</h1>
                <p>One of the Best Marine Education Platform</p>
                <div className="card-container">
                    <div className="card">
                        <img src="support.png" alt="Support" style={{ width: "120px", height: "120px" }} />
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>SUPPORT</h3>
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }} >Our support team work for complete preparation of courses by D.G shipping Govt. of India or RPSL with well versed & experienced mariners team.</p>
                    </div>
                    <div className="card">
                        <img src="rocket.png" alt="Hassle Free Process" style={{ width: "120px", height: "120px" }} />
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>HASSLE FREE PROCESS</h3>
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }} >MMA ensures the whole process & preparation to be smooth & glitch-free for both the aspiring candidates & the maritime institutes.</p>
                    </div>
                    <div className="card">
                        <img src="mission.png" alt="Mission" style={{ width: "120px", height: "120px" }} />
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>MISSION</h3>
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }}>Your Bright Future under maritime Industry with end-to-end solutions for MARITIME EDUCATION CONSULTANCY & SHIP MANAGEMENT is our core mission.</p>
                    </div>
                    <div className="card">
                        <img src="vision.png" alt="Vision" style={{ width: "120px", height: "120px" }} />
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>VISION</h3>
                        <div  className="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }}>To provide to quality education and maritime consultancy to aspiring as well as existing marine Personnel.</p>
                    </div>
                </div>
            </div>
            <div className='Interface display'>
                <div  className="interface-inner">
                    <p className='heading primary' style={{ fontSize: "48px", lineHeight:"1.2", fontWeight:"700", color:"rgba(255,255,255,1)", padding:"10px" }}>Interface Friendly Learning At</p>
                    <div style={{ color: "white", fontSize: "22px", lineHeight: "30px", marginBottom: "20px" }}>MMA- Maritime Marvels Academy</div>
                    <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "14px" }}>MMA is an independent Crew management & Maritime training company which is incorporated with Govt. of India and ISO Certified 9001:2015 by group that offers a comprehensive range of high quality marine services. We are committed to highest level of quality, professionalism and strong credibility as a proactive, forward thinking marine manpower Employment Company. Our core competence is in training and manning. We are committed to training of general purpose ratings by imparting hands on training on all important aspects of good seamanship practices and general maintenance of the engine of the ship. Our ultimate goal is to provide well trained and qualified ratings to the shipping industry, which certainly is the need of every ship owner today world- wide.</div>
                    <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "14px" }}>Maritime Marvels Academy is dedicated to select and train young Youth to level of high competence that allows them, to serve on any type of vessel in the world through clearing IMU-CET & Pre sea training. At Maritime Marvels Academy We understand that a Preparatory Class is only as Effective as the Teacher teaching it, and all of our Tutors have Superior Educational and Maritime Professional Qualifications.</div>
                </div>
            </div>
            <div className="testimonials-section-wrapper">
                <div className="testimonials-section">
                    <div className="headings-wrapper">
                        <p style={{fontSize:"48px", padding:"18px 18px", fontWeight:"700"}}>Our Students Love Us</p>
                        <p>Don’t Just Take Our Word For It, Read It From Them</p>
                    </div>
                    <div  className="testimonials">
                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Good staff members I have worked with Maritime Marvels Academy they doing very well 
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>
                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Absolutely best company for adm. in dg approved colleges and 100% placement guarantee    
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>
                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Today i got sponsorship for dns admission through Maritime Marvels Academy rahul sir doing great work they provide good dg college with 100% placement thank u sir
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>

                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Good staff members I have worked with Maritime Marvels Academy they doing very well 
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>
                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Absolutely best company for adm. in dg approved colleges and 100% placement guarantee    
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>
                        <div  className="testimonial_wrapper">
                            <div  className="testimonial">
                                Today i got sponsorship for dns admission through Maritime Marvels Academy rahul sir doing great work they provide good dg college with 100% placement thank u sir
                            </div>
                            <div  className="user">
                                <img src="user-image.svg" alt="User" />
                                <span  className="user-name">Tara Chouhan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;