"use client"
import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../public/Navbar/logo.png";
import Image from "next/image";
import { FaRegEnvelope } from "react-icons/fa";
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger icon for mobile
import data from "./Navbar.json"

const Navbar = ({ host }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // To control mobile menu visibility

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              <p style={{ fontWeight: "400", fontSize: "14px" }}>{data.collaboration}</p>
              <p style={{ fontSize: "14px" }}>
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
        <div>
          <a href={host}>
            <Image
              className='logo-main'
              src={logo}
              alt="go top"
              width={250}
              height={180}
              style={{ cursor: 'pointer' }}
            />
          </a>
        </div>

        {/* Mobile Menu */}
        <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
          {isMobile ? (
            <div className="mobile-menu">
              <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                <FaBars style={{ fontSize: '30px', cursor: 'pointer' }} />
              </div>
              {menuOpen && (
                <div className="mobileMenuContent">
                  <div className="menu-close" onClick={() => setMenuOpen(false)} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    height: '100px',
                    paddingRight: '20px',
                  }}>
                    <FaTimes style={{ fontSize: '30px', cursor: 'pointer', marginBottom: '10px' }} />
                  </div>

                  {data?.menu?.map((item) => (
                    <span className="fusion-menu-item" key={item.id}>
                      <Link href={item.link === "" ? host : `${host}${item.link}`}>
                        {item.text}
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
              )}
            </div>
          ) : (
            <div className="fusion-custom-menu fusion-menu-element-list">
              {data?.menu?.map((item) => (
                <span className="fusion-menu-item" key={item.id}>
                  <span className="transition-center-grow"></span>
                  <Link href={item.link === "" ? host : `${host}${item.link}`}>
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
          )}
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


{/* <div className="testimonials-section-wrapper">
        <div className="testimonials-section">
          <div className="headings-wrapper">
            <p className="testimonials-heading">{data.testimonialsSection.heading}</p>
            <p>{data.testimonialsSection.subheading}</p>
          </div>
          <div className="testimonials">
            {currentTestimonials.map((testimonial, index) => (
              <div className="testimonial_wrapper" key={index}>
                <div className="user">
                  <Image src={testimonial.image} alt="User" width={95} height={95} loading="lazy" />
                </div>
                <div className="testimonial">{testimonial.text}</div>
                <div className="user-info">
                  <span className="user-name">{testimonial.name}</span>
                  <span className="user-post">{testimonial.post}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
