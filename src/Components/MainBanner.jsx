import React from 'react';

const MainBanner = () => {
    return (
        <div className="bg-stone-400 p-10 flex flex-row w-full gap-10">
            <div className="w-full flex flex-col">
                <img className="pb-6" src="mainBanner.svg" alt="" />
                <div>
                    <img src="customerReview.svg" alt="" />
                </div>
            </div>

            <div className="w-full bg-green-500 flex flex-col gap-y-8">
                <h2 className="text-[2rem] font-normal capitalize">
                    <span className="text-[#2C7EF8]">ONE TIME ONLY</span>{' '}
                    special price for 6 extra Clarifion for only
                    <span className="text-[#2C7EF8]"> $14 each</span> ($84.00
                    total!)
                </h2>

                <div className="w-full flex flex-row lg:text-base justify-end  gap-x-6 ">
                    <div className="flex just ">
                        <img className="" src="ionizerImage.svg" alt="" />
                    </div>

                    <div className="flex-1 flex flex-col gap-y-1.5">
                        <div className="flex flex-row justify-between">
                            <p className="text-xl">Clarifion Air Ionizer</p>
                            <div className="flex font-semibold gap-x-2 items-center">
                                <p className="text-[#969696]">$180</p>
                                <h2 className="text-[#2C7EF8] text-xl">$84</h2>
                            </div>
                        </div>

                        <img className=" w-24" src="stars.svg" alt="" />

                        <div className="flex gap-x-4">
                            <img src="dot.svg" alt="" />
                            <p>12 left in stock</p>
                        </div>
                        <p>
                            Simply plug a Clarifion into any standard outlet and
                            replace bulky, expensive air purifiers with a
                            simple.
                        </p>
                    </div>
                </div>

                <div className="w-full flex flex-col gap-y-4 text-base">
                    <div className="flex flex-row gap-x-3  items-center">
                        <img src="tickIcon.svg" alt="" />
                        <p>
                            Negative Ion Technology may{' '}
                            <span className="font-bold text-[#4D5254]">
                                help with allergens
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <img src="tickIcon.svg" alt="" />
                        <p>
                            Designed for{' '}
                            <span className="font-bold text-[#4D5254]">
                                air rejuvenation
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        <img src="tickIcon.svg" alt="" />
                        <p>
                            <span className="font-bold text-[#4D5254]">
                                Perfect for every room{' '}
                            </span>
                            in all types of places.
                        </p>
                    </div>
                </div>

                <div className="bg-[#EDF3FD] rounded-lg">
                    <div className="flex flex-row items-center gap-x-4 px-4 py-3">
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

                <div className="w-full">
                    <button className="w-full cursor-pointer bg-[#59AE43] text-white justify-center flex flex-row items-center uppercase px-16 py-4 rounded-full gap-x-2 text-xl">
                        yes - claim my discount{' '}
                        <img src="rightArrowIcon.svg" alt="" />
                    </button>

                    <div className="w-full pt-4">
                        <div className="text-xs border border-[#CFCFCF] rounded text-[#4D5254] flex flex-row items-center justify-center gap-x-4 py-2">
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

                        <div className="w-full flex justify-center items-center text-lg text-[#F82C2C] uppercase underline pt-5 font-medium cursor-pointer">
                            <h2>No thanks, I don’t want this.</h2>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-x-4'>
                    <div className='w-1/2'>
                        <img src="emblem.svg" alt="" />
                    </div>
                    <p className='mr-5'>If you are not completely thrilled with your Clarifion - We have a <span className="font-bold text-[#4D5254]">30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;
