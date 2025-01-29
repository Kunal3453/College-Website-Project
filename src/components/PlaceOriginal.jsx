import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Placecard from "./Placecard";
import { Autoplay,FreeMode, Pagination} from 'swiper/modules';
function PlaceOriginal()
{
    return(
<Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <div className='flex  flex-col md:flex-row'>
        <SwiperSlide ><Placecard place="./Placestudent1.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placestudent2.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent3.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent4.jpg"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent5.jpg"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent6.jpg"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placestudent1.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placestudent2.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent3.webp"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent4.jpg"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent5.jpg"/></SwiperSlide>
        <SwiperSlide ><Placecard place="./Placementstudent6.jpg"/></SwiperSlide>
        </div>
      </Swiper>
    );
}
export default PlaceOriginal;