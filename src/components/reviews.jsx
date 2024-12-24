import React from "react";
import dataSite from "./data";
import { useState } from "react";
import { SwiperNavButtons } from "./swiperBtns/SwiperNavButton";


import { Controller, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



// users img

import userOne from "../styles/style-components/img/userImages/userOne.jpg"
import userTwo from "../styles/style-components/img/userImages/userTwo.jpeg"
import userThree from "../styles/style-components/img/userImages/userThree.jpeg"
import userFour from "../styles/style-components/img/userImages/userFour.jpeg"


const reviews = dataSite[0].reviews;

const OpItem = (props) => 

<div className="reviews__opinions__item">
    {props.contain && <h4>{props.contain}</h4>}
    <div className="reviews__profile">
        {props.images && <img src={props.images} alt="user photo" />}
        <div className="reviews__sign">
            {props.userName && <h4 className="reviews__name">{props.userName}</h4>}
            {props.location && <p className="reviews__adress">{props.location}</p>}
        </div>
    </div>
</div>


export default function Reviews(){

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);
    
    return(
        <section className="reviews">
            <div className="wrapper">
                <div className="reviews__block">
                    <div className="reviews__des">
                        <h4>{reviews.desBlock.hFour}</h4>
                        <h2>{reviews.desBlock.hTwo}</h2>
                        <p>{reviews.desBlock.des}</p>
                    </div>
                    <div className="reviews__line"></div>
                    <div className="reviews__opinions">
                    <Swiper
                    modules={[Controller, Autoplay]}
                    onSwiper={setFirstSwiper}
                    controller={{ control: secondSwiper }}
                    // autoplay={true}
                    loop={true}
                    >   
                        <SwiperSlide><OpItem contain={reviews.firstOpinion.contain}/></SwiperSlide>
                        <SwiperSlide><OpItem contain={reviews.secondOpinion.contain}/></SwiperSlide>
                        <SwiperSlide><OpItem contain={reviews.thirdOpinion.contain}/></SwiperSlide>
                        <SwiperSlide><OpItem contain={reviews.fourthOpinion.contain}/></SwiperSlide>
                    </Swiper>

                    <Swiper
                        modules={[Controller]}
                        onSwiper={setSecondSwiper}
                        controller={{ control: firstSwiper }}
                       
                        loop={true}
                    >
                        <SwiperNavButtons/>
                        <SwiperSlide><OpItem images={userOne} userName={reviews.firstOpinion.userName} location={reviews.firstOpinion.location}/></SwiperSlide>
                        <SwiperSlide><OpItem images={userTwo} userName={reviews.secondOpinion.userName} location={reviews.secondOpinion.location}/></SwiperSlide>
                        <SwiperSlide><OpItem images={userThree} userName={reviews.thirdOpinion.userName} location={reviews.thirdOpinion.location}/></SwiperSlide>
                        <SwiperSlide><OpItem images={userFour} userName={reviews.fourthOpinion.userName} location={reviews.fourthOpinion.location}/></SwiperSlide>
                
                    </Swiper>

                  
                    </div>
                </div>
            </div>
        </section>
    )
}