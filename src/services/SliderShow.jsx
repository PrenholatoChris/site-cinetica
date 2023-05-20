import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import CardServices from '../componentes/CardServices/CardServices'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function SliderShow({arrayInf, setLocalService}) {

  function SlideMap(obj){
    // if($("swiper-slide").hasClass("swiper-slide-active")){
    //   console.log(0)
    // }else if($("swiper-slide").hasClass("swiper-slide-active")){
    //   // setLocalService(1)
    //   console.log(1)
    // }

    return <SwiperSlide>
        <div id={obj.objIndex}>
          <CardServices arrayInf={obj}/>
        </div>
      </SwiperSlide>
  }

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {arrayInf.map((obj) => SlideMap(obj))}       
      </Swiper>
    </>
  );
}
