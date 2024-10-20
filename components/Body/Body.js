"use client";
import React, { useState, useEffect, useMemo } from "react";
import "./Body.css";
import Image from "next/image";
import missionIcon from "../../public/GSDM-400x400.png";
import sliderImage1 from "../../public/Slider/2.jpg";
import sliderImage2 from "../../public/Slider/3.jpg";
import sliderImage3 from "../../public/Slider/4.jpg";
import sliderImage4 from "../../public/Slider/5.jpg";
import sliderImage5 from "../../public/Slider/6.jpg";
import data from "./Body.json";
import { GrNext, GrPrevious } from "react-icons/gr";

const Body = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = data.testimonialsSection.testimonials;

  const images = useMemo(
    () => [sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 2);

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
      <div id="image-container">
        <div
          style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
          className="background-image"
        >
          <div className="banner_content-wrapper">
            <div className="banner_content">
              <div className="banner-heading with-bg">
                {data.banner.heading}
              </div>
              <h3 className="banner-suheading" style={{ background: "#00000066" }}>
                {data.banner.subheading}
              </h3>
              <a className="banner-link with-bg" href={data.banner.linkUrl}>
                {data.banner.linkText}
              </a>
            </div>
          </div>
        </div>
        <button onClick={prevImage} className="nav-button previous">
          <GrPrevious />
        </button>
        <button onClick={nextImage} className="nav-button next">
          <GrNext />
        </button>
      </div>

      <div className="body display">
        <div>
          <Image src={missionIcon} alt="go top" width={300} height={300} priority={true} />
        </div>
        <div className="text-img-section">
          <div>
            <h1 className="heading primary">{data.approvalSection.heading}</h1>
          </div>
          <div className="content-spacing" />
          <div className="approval-text">
            <p>
              {data.approvalSection.text1}
              <b>{data.approvalSection.boldContent}</b>
              {data.approvalSection.text2}
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1>{data.cardsSection.title}</h1>
        <p>{data.cardsSection.subtitle}</p>
        <div className="card-container">
          {data.cardsSection.cards.map((card, index) => (
            <div className="card" key={index}>
              {card?.image && (
                <Image src={card?.image} alt={card.title} className="card-image" width={150} height={150} />
              )}
              <div className="separator large"></div>
              <h3 className="card-title">{card.title}</h3>
              <br />
              <div className="separator small"></div>
              <p className="card-description">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="Interface display">
        <div className="interface-inner">
          <p className="interface-heading">{data.interfaceSection.heading}</p>
          <div className="interface-subheading">{data.interfaceSection.subheading}</div>
          {data.interfaceSection.paragraphs.map((paragraph, index) => (
            <div key={index} className="interface-paragraph">
              {paragraph}
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-section-wrapper">
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
                <div>
                  <div className="testimonial">{testimonial.text}</div>
                  <div className="user-info" style={{ textAlign:"left; padding: 0" }}>
                    <span className="user-name">- {testimonial.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
