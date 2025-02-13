"use client"
import React, { useEffect, useRef, useState } from 'react';
import "./Gallery.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      alt: "image-1",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g18.jpg",
    },
    {
      id: 2,
      alt: "image-2",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g31.jpg",
    },
    {
      id: 3,
      alt: "image-3",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g32.jpg",
    },
    {
      id: 4,
      alt: "image-4",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g30.jpg",
    },
    {
      id: 5,
      alt: "image-5",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g29.jpg",
    },
    {
      id: 6,
      alt: "image-6",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g26.jpg",
    },
    {
      id: 7,
      alt: "image-7",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g20.jpg",
    },
    {
      id: 8,
      alt: "image-8",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g19.jpg",
    },
    {
      id: 9,
      alt: "image-9",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g12.jpg",
    },
    {
      id: 10,
      alt: "image-10",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g10.jpg",
    },
    {
      id: 11,
      alt: "image-11",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g6.jpg",
    },
    {
      id: 12,
      alt: "image-12",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g4.jpg",
    },
    {
      id: 13,
      alt: "image-13",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g5.jpg",
    },
    {
      id: 14,
      alt: "image-13",
      src: "https://northindiamarineacademy.in/wp-content/uploads/2022/09/g11.jpg",
    },
  ];

  const imageRefs = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => {
              img.classList.add('loaded');
              if (imageRefs.current.some((img) => img.classList.contains('loaded'))) {
                setLoading(false);
              }
            };
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    imageRefs.current.forEach((img) => {
      if (img) {
        observer.observe(img);
      }
    });

    return () => {
      imageRefs.current.forEach((img) => {
        if (img) {
          observer.unobserve(img);
        }
      });
    };
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-item">
            <img
              data-src={image.src}
              alt={image.alt}
              className="gallery-image"
              ref={(el) => (imageRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;