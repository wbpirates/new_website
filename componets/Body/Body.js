"use client"
import React, { useState, useEffect } from 'react'
import "./Body.css"
import Image from "next/image";
import messageIcon from "./GSDM-400x400.png"
import messageIcon1 from "./Images/2.jpg"
import messageIcon2 from "./Images/3.jpg"
import messageIcon3 from "./Images/4.jpg"
import messageIcon4 from "./Images/5.jpg"
import messageIcon5 from "./Images/6.jpg"
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const Body = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([messageIcon1, messageIcon2, messageIcon3, messageIcon4, messageIcon5]);

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
            <div id="image-container" style={{ width: '100%', height: '500px', position: 'relative' }}>
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
                ></div>
                <button
                    onClick={prevImage}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.5)',
                        cursor: 'pointer',
                        // display: 'none', // Hide by default
                        color: 'white',
                        fontSize: '24px' // Increase icon size
                    }}
                    className="nav-button" // Add className for hover effect
                >
                    <GrPrevious />
                </button>
                <button
                    onClick={nextImage}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        transform: 'translateY(-50%)',
                        background: 'rgba(255, 255, 255, 0.5)',
                        border: 'none',
                        cursor: 'pointer',
                        // display: 'none', // Hide by default
                        color: 'white',
                        fontSize: '24px' // Increase icon size
                    }}
                    className="nav-button" // Add className for hover effect
                >
                    <GrNext />
                </button>
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
            <div className="container" style={{ paddingRight: "100px", paddingLeft: "100px", gap: "25px" }}>
                <h1>NIMA - North India Marine Academy</h1>
                <p>One of the Best Marine Education Platform</p>
                <div className="card-container">
                    <div className="card">
                        <img src="7.png" alt="Support" style={{ width: "120px", height: "120px" }} />
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>SUPPORT</h3>
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }} >Our support team work for complete preparation of courses by D.G shipping Govt. of India or RPSL with well versed & experienced mariners team.</p>
                    </div>
                    <div className="card">
                        <img src="8.png" alt="Hassle Free Process" style={{ width: "120px", height: "120px" }} />
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>HASSLE FREE PROCESS</h3>
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }} >NIMA ensures the whole process & preparation to be smooth & glitch-free for both the aspiring candidates & the maritime institutes.</p>
                    </div>
                    <div className="card">
                        <img src="9.png" alt="Mission" style={{ width: "120px", height: "120px" }} />
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>MISSION</h3>
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }}>Your Bright Future under maritime Industry with end-to-end solutions for MARITIME EDUCATION CONSULTANCY & SHIP MANAGEMENT is our core mission.</p>
                    </div>
                    <div className="card">
                        <img src="9.png" alt="Vision" style={{ width: "120px", height: "120px" }} />
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "40px auto 0", width: "100%" }}></div>
                        <h3 style={{ margin: "0px", textAlign: "center", fontSize: "22px", padding: "0px", lineHeight: "1.2", fontWeight: "700" }}>VISION</h3>
                        <div class="fusion-full-width-sep" style={{ display: "flex", alignItems: "center", margin: "10px auto 0", width: "100%" }}></div>
                        <p style={{ textAlign: "center", marginTop: "0px", marginBottom: "20px", lineHeight: "2.14" }}>To provide to quality education and maritime consultancy to aspiring as well as existing marine Personnel.</p>
                    </div>
                </div>
            </div>
            {/* Interface Friendly Learning At */}
            <div className='Interface display' style={{ paddingRight: "120px", paddingLeft: "120px", gap: "25px", flexDirection: "column" }}>
                <div style={{ color: "white", lineHeight: "1.2", fontSize: "48px", fontWeight: "700", margin: "0" }}>Interface Friendly Learning At</div>
                <div style={{ color: "white", fontSize: "22px", lineHeight: "30px", marginBottom: "20px" }}>NIMA- North India Marine Academy</div>
                <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "14px" }}>NIMA is an independent Crew management & Maritime training company which is incorporated with Govt. of India and ISO Certified 9001:2015 by group that offers a comprehensive range of high quality marine services. We are committed to highest level of quality, professionalism and strong credibility as a proactive, forward thinking marine manpower Employment Company. Our core competence is in training and manning. We are committed to training of general purpose ratings by imparting hands on training on all important aspects of good seamanship practices and general maintenance of the engine of the ship. Our ultimate goal is to provide well trained and qualified ratings to the shipping industry, which certainly is the need of every ship owner today world- wide.</div>
                <div style={{ textAlign: "justify", marginTop: 0, marginBottom: "20px", color: "#ffffff", lineHeight: "2.14", fontSize: "14px" }}>North India Marine Academy is dedicated to select and train young Youth to level of high competence that allows them, to serve on any type of vessel in the world through clearing IMU-CET & Pre sea training. At North India Marine Academy We understand that a Preparatory Class is only as Effective as the Teacher teaching it, and all of our Tutors have Superior Educational and Maritime Professional Qualifications.</div>
            </div>
            {/* Our Students Love Us */}
            <div class="testimonials-section">
                <h2>Our Students Love Us</h2>
                <p>Don’t Just Take Our Word For It, Read It From Them</p>
                <div class="testimonials">
                    <div class="testimonial">
                        <p>Good staff members I have worked with North Indian Marine Academy they doing very well</p>
                        <div class="user">
                            <img src="user1.png" alt="User" />
                                <div class="user-name">Tara Chouhan</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>Absolutely best company for adm. in dg approved colleges and 100% placement guarantee</p>
                        <div class="user">
                            <img src="user2.png" alt="User" />
                                <div class="user-name">Naveen Sharma</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>Today i got sponsorship for dns admission through north india marine academy rahul sir doing great work they provide good dg college with 100% placement thank u sir</p>
                        <div class="user">
                            <img src="user3.png" alt="User" />
                                <div class="user-name">Mohit Ruhil</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>Best company ever 100% placement record & all course approved by DG shipping and special thank you Rahul sir</p>
                        <div class="user">
                            <img src="user4.png" alt="User" />
                                <div class="user-name">Lucky Gupta</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>Today I proud my son sailing on ship as 3rd officer in australia.thank u merchantnavyhelpdesk &north india marine academy</p>
                        <div class="user">
                            <img src="user5.png" alt="User" />
                                <div class="user-name">Naveen Kumar</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>Nice company for freshers I complete my first sail through north india marine academy thank u</p>
                        <div class="user">
                            <img src="user6.png" alt="User" />
                                <div class="user-name">Asha Ram Bairwa</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>A good place for join merchantnavy they provide good ship after completed course now I’m in europe sailing as a tr wiper thank you merchant Navy help desk& North india marine academy</p>
                        <div class="user">
                            <img src="user7.png" alt="User" />
                                <div class="user-name">Vipin Yadav</div>
                        </div>
                    </div>
                    <div class="testimonial">
                        <p>When you have a dream, you’ve got to grab it and never let go. So now it’s your turn to fulfill your dream to be a mariner with North Indian marine Academy. Best Placement service by Rahul sir.</p>
                        <div class="user">
                            <img src="user8.png" alt="User" />
                                <div class="user-name">Manisha Rao</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body