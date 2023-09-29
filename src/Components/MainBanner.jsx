import React from 'react';

const MainBanner = () => {
    return (
        <div className=" p-5 lg:p-10 flex sm:flex-col lg:flex-row w-full lg:gap-10">
            <div className="w-full flex flex-col ">
                <h2 className="lg:hidden text-2xl text-center font-normal capitalize leading-none capsize sm:pb-6">
                    <span className="text-[#2C7EF8]">ONE TIME ONLY</span>{' '}
                    special price for 6 extra Clarifion for only
                    <span className="text-[#2C7EF8]"> $14 each</span> ($84.00
                    total!)
                </h2>

                <img className="sm:pb-6" src="mainBanner.svg" alt="" />
                <div className="sm:hidden lg:block">
                    <img src="customerReview.svg" alt="" />
                </div>
            </div>

            <div className="w-full lg:flex lg:flex-col gap-y-8 ">
                <h2 className="sm:hidden lg:block text-[2rem] font-normal capitalize leading-none capsize">
                    <span className="text-[#2C7EF8]">ONE TIME ONLY</span>{' '}
                    special price for 6 extra Clarifion for only
                    <span className="text-[#2C7EF8]"> $14 each</span> ($84.00
                    total!)
                </h2>

                <div className="w-full flex flex-row sm:sm:text-xs lg:text-base justify-end gap-x-6 ">
                    <div className="flex">
                        <img className="" src="ionizerImage.svg" alt="" />
                    </div>

                    <div className="flex-1 flex flex-col gap-y-1.5">
                        <div className="flex flex-row justify-between">
                            <p className="sm:text-sm lg:text-xl">
                                Clarifion Air Ionizer
                            </p>
                            <div className="flex font-semibold gap-x-2 items-center">
                                <p className="text-[#969696]">$180</p>
                                <h2 className="text-[#2C7EF8] sm:text-sm lg:text-xl">
                                    $84
                                </h2>
                            </div>
                        </div>

                        <img className=" w-24" src="stars.svg" alt="" />

                        <div className="flex gap-x-4">
                            <img src="dot.svg" alt="" />
                            <p>12 left in stock</p>
                        </div>
                        <p className="text- sm:hidden lg:flex">
                            Simply plug a Clarifion into any standard outlet and
                            replace bulky, expensive air purifiers with a
                            simple.
                        </p>
                    </div>
                </div>

                <div className="w-full pt-4 flex flex-col gap-y-4 sm:text-[.74rem] lg:text-base ">
                    <p className=" pb-2 lg:pb-0 sm:flex lg:hidden text-center">
                        Simply plug a Clarifion into any standard outlet and
                        replace bulky, expensive air purifiers with a simple.
                    </p>
                    <div className="flex flex-row gap-x-3  items-center ">
                        <img
                            className="sm:w-4 lg:w-auto"
                            src="tickIcon.svg"
                            alt=""
                        />
                        <p className="leading-tight capsize">
                            Negative Ion Technology may{' '}
                            <span className="font-bold text-[#4D5254]">
                                help with allergens.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <img
                            className="sm:w-4 lg:w-auto"
                            src="tickIcon.svg"
                            alt=""
                        />
                        <p className="leading-none capsize">
                            Designed for{' '}
                            <span className="font-bold text-[#4D5254]">
                                air rejuvenation.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <img
                            className="sm:w-4 lg:w-auto"
                            src="tickIcon.svg"
                            alt=""
                        />
                        <p className="leading-none capsize">
                            <span className="font-bold text-[#4D5254]">
                                Perfect for every room{' '}
                            </span>
                            in all types of places.
                        </p>
                    </div>
                </div>

                <div className="sm:my-6 lg:my-0 bg-[#EDF3FD] rounded-lg ">
                    <div className="sm:text-sm lg:text-base flex flex-row items-center gap-x-4 px-4 py-3 ">
                        <img src="percent.svg" alt="" />
                        <p>
                            Save <span className="text-[#2C7EF8]">53%</span> and
                            get{' '}
                            <span className="text-[#2C7EF8]">
                                6 extra Clarifision
                            </span>{' '}
                            for only{' '}
                            <span className="text-[#2C7EF8]">$14 Each.</span>
                        </p>
                    </div>
                </div>

                <div className="w-full ">
                    <button className="sm:text-xs lg:text-base  font-bold outline-none w-full cursor-pointer bg-[#59AE43] text-white justify-center flex flex-row items-center uppercase px-16 py-4 rounded-full gap-x-2 text-xl">
                        yes - claim my discount
                        <img src="rightArrowIcon.svg" alt="" />
                    </button>

                    <div className="w-full pt-4">

                    <div className="lg:hidden text-xs border #CFCFCF] rounded text-[#4D5254] ">
                            <div className='flex flex-row items-center justify-center mx-2 gap-x-4 pb-3 pt-2 border-b-2'>
                            <p>Free Shipping</p>
                            <span> | </span>
                            <div className=" flex flex-row gap-2 items-center">
                                <img
                                    className=""
                                    src="lockIconGrey.svg"
                                    alt=""
                                />
                                <p>Secure 256-bit SSL encryption</p>
                            </div>
                            </div>
                            <div className='flex justify-center pt-3 pb-2'>
                                <img src="cards.svg" alt="" />
                            </div>
                        </div>
                        
                        <div className="sm:hidden text-xs border b#CFCFCF] rounded text-[#4D5254] lg:flex flex-row items-center justify-center gap-x-4 py-2 ">
                            <p>Free Shipping</p>
                            <span> | </span>
                            <div className=" flex flex-row gap-2 items-center">
                                <img
                                    className=""
                                    src="lockIconGrey.svg"
                                    alt=""
                                />
                                <p>Secure 256-bit SSL encryption</p>
                            </div>
                            <span> | </span>
                            <div>
                                <img src="cards.svg" alt="" />
                            </div>
                        </div>

                        <div className="w-full flex justify-center items-center text-xs lg:text-lg text-[#F82C2C] uppercase underline sm:pt-3 lg:pt-5 font-medium cursor-pointer">
                            <h2>No thanks, I don’t want this.</h2>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-x-4 sm:pb-12  sm:pt-6 lg:py-0">
                    <div className="sm:w-3/5 lg:w-1/2">
                        <img src="emblem.svg" alt="" />
                    </div>
                    <p className=" sm:text-[0.76rem] lg:text-base lg:mr-5 leading-snug capsize">
                        If you are not completely thrilled with your Clarifion -
                        We have a{' '}
                        <span className="font-bold text-[#4D5254]">
                            30 day satisfaction guarantee.
                        </span>{' '}
                        Please refer to our return policy at the bottom of the
                        page for more details. Happy Shopping!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
