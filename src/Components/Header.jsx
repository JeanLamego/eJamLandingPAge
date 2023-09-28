import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import {data} from '../json/headerData'

const Header = () => {
    

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            {window.innerWidth > 768 ? (
                <div className="flex justify-around w-full sm:h-10lg:h-[50px] text-white text-xs uppercase">
                    {data.map(item => (
                        <div key={item.id} className="flex items-center">
                            <img className="mr-2" src={item.image} />
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex text-xs align-items">
                    <Swiper
                        slidesPerView={1}
                        centeredSlides={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        modules={[Autoplay]}
                    >
                        <div className=" flex justify-around w-full sm:h-10 lg:h-[50px] ">
                            {data.map(item => (
                                <SwiperSlide key={item.id}>
                                    <div className="swiper-button-prev">
                                        <img
                                            src="leftArrow.svg"
                                            alt="previous arrow"
                                        />
                                    </div>
                                    <div className="w-full sm:h-10 flex justify-center items-center text-white text-xs uppercase">
                                        <img
                                            className="mr-2"
                                            src={item.image}
                                        />
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="swiper-button-next">
                                        <img
                                            src="rightArrow.svg"
                                            alt="next arrow"
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </Swiper>
                </div>
            )}
            <div className="bg-white w-full h-24 flex justify-between items-center px-32 py-7">
                <img className="w-48 h-9" src="clarifionLogo.png" alt="" />
                <div className="flex gap-8">
                    <img src="mcafeeLogo.svg" alt="" />
                    <img src="nortonLogo.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
