import React from "react";
import Link from "next/link";

import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const Responsive = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />

      <Slider {...settings}>
        <div>
          <div
            style={{
              background: "hotpink",
              color: "white"
            }}
          >
               
               <img src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" alt="" />

          </div>
        </div>
     
        <div>
        </div>
        <div>
        
        </div>
        <div>
      
        </div>
        <div>
        <img src="https://a.cdn-hotels.com/gdcs/production109/d34/0e2d7854-11df-4ca9-8018-211e8ae372e5.jpg" alt="" />

        </div>
        <div>
        </div>
       
        <div>
        </div>
      </Slider>
    </div>
  );
};

export default () => (
  <div>
    <Responsive />
  </div>
);
