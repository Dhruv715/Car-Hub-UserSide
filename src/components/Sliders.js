import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden" style={{ height: "50vh", width: "100%" ,overflowX:'hidden'}}>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.squarespace-cdn.com/content/v1/57916842bebafb827652722c/2a9d34d3-121e-436a-a73b-03cf1070030a/Prestige+Imports+CEO+Brett+David+Closes+On+Biscayne+Boulevard+Site+Expanding+Prestige+Campus+In+North+Miami"
            className="img-fluid rounded-top semiimg"
            alt="Car Rental"
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://walkthru360.com/wp-content/uploads/2017/11/Jidd-Motors-Chicago-Luxury-Auto-Dealer-Mercedes-Showroom-1005.jpg"
            className="img-fluid rounded-top semiimg"
            alt="Car Rentals"
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="https://gartec.com/wp-content/uploads/2021/03/Gartec_Lifts_7000_Lookers_3_Web.jpg"
            className="img-fluid rounded-top semiimg"
            alt="Taxi Cab Service"
            style={{ height: "50vh", width: "100%", objectFit: "cover" }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
