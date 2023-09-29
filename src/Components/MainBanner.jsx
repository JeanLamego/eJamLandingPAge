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
                <h2 className='text-[2rem] font-normal capitalize'>
                    <span className='text-[#2C7EF8]'>ONE TIME ONLY</span> special price for 6 extra Clarifion for only
                    <span className='text-[#2C7EF8]'> $14 each</span> ($84.00 total!)
                </h2>

                <div className="w-full flex flex-row lg:text-base justify-end  gap-x-6 ">
                    <div className="flex just ">
                        <img className='' src="ionizerImage.svg" alt="" />
                    </div>

                    <div className="flex-1 flex flex-col gap-y-1.5">
                        <div className="flex flex-row justify-between">
                            <p className="text-xl">Clarifions Air Ionizer</p>
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
            </div>
        </div>
    );
};

export default MainBanner;
