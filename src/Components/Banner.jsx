import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='sm:px-5 sm:pt-12 lg:px-32'>
                <div className='flex flex-col sm:text-center  capitalize sm:gap-6 items-center justify-center'>
                    <h2 className='font-normal sm:text-3xl lg:text-5xl'>Wait ! your order in progress.</h2>
                    <h1 className='sm:text-base lg:text-2xl text-[#4D5254]'>Lorem ipsum dolor sit amet, consectetur adipiscing </h1>
                </div>
                <div className='flex  pb-10 pt-14 justify-between'>
                    <div className='flex items-center gap-5 text-xl'>
                        <img className="w-10" src="tipCircleIcon.svg" alt="" />
                        <p >Step 1 : Cart Review</p>
                    </div>
                    <div className='flex items-center gap-5 text-xl'>
                        <img className="w-10" src="tipCircleIcon.svg" alt="" />
                        <p >Step 2 : Checkout</p>
                    </div>
                    <div className='flex items-center gap-5 text-xl font-bold'>
                        <img className="w-10" src="step3.svg" alt="" />
                        <p >Step 3 : Special Offer</p>
                    </div>
                    <div className='flex items-center gap-5 text-xl'>
                        <img className="w-10" src="step4.svg" alt="" />
                        <p >Step 4 : Confirmation</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
