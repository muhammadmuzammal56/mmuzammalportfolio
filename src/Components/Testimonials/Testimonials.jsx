import React from "react";
import './Testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import profilepic1 from '../../img/profile1.jpg'
import profilepic2 from '../../img/profile2.jpg'
import profilepic3 from '../../img/profile3.jpg'
import profilepic4 from '../../img/profile4.jpg'



function Testimonials() {
    const clients = [
        {
            img: profilepic1,
            review: "This product is amazing! I love it."
        },
        {
            img: profilepic2,
            review: "The quality of this item is excellent. Highly recommended."
        },
        {
            img: profilepic3,
            review: "I'm not satisfied with this product. It didn't meet my expectations."
        },
        {
            img: profilepic4,
            review: "Great value for the price. I'm happy with my purchase."
        }
    ];



    return (
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blurr t-blur1" style={{ background: 'rgb(238 210 255)' }}></div>

                <div className="blurr t-blur2" style={{ background: 'skyblue' }}></div>
            

            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'74%'}}>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img}></img>
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            </div>

            {/* slider */}
           
        </div>
    );
}

export default Testimonials;
