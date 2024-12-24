import {useSwiper} from 'swiper/react'



export const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return(
        <div className="swiper_nav_btns">
            <button className='prev' onClick={() => swiper.slidePrev()}></button>
            <button className='next' onClick={() => swiper.slideNext()}></button>
        </div>
    )
}