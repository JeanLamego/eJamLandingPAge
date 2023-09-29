import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-[#252F3D] w-full sm:p-5  lg:px-32 sm:py-6 text-white">
                <div className="flex lg:flex-row sm:flex-col sm:text-xs lg:text-base sm:gap-4 sm:justify-center sm:items-center lg:justify-between">
                    <p>
                        Copyright (C) 2023<span className="text-sm p-2">|</span>
                        clarifionsupport@clarifion.com
                    </p>
                    <div className="flex capitalize gap-4">
                        <img
                            src="lockIcon.svg"
                            alt="Lock Icon"
                        />
                        <p>Secure 256-bit SSL encryption.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
