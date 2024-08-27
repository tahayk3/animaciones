import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css"; // Importa tu archivo CSS personalizado

const ColorCarousel: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const settings = useMemo(() => ({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }), []);

  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33"];

  return (
    <div aria-label="Color Carousel">
      <Slider {...settings}>
        {colors.map((color, index) => (
          <div key={index} style={{ padding: "0 10px" }}>
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                height: "550px",
                backgroundColor: hoveredIndex === index ? color : "transparent",
                border: `1px solid ${color}`,
                borderRadius: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontSize: "24px",
                margin: "50px",
                transition: "background-color 1s, color 1s",
                boxSizing: "border-box",
              }}
              role="listitem"
            >
              Card {index + 1}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default React.memo(ColorCarousel);

