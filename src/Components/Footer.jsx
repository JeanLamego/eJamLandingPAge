import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full px-32 py-6 text-white">
        <div className="flex justify-between">
          <p>Copyright (C) 2023 | clarifionsupport@clarifion.com</p>
          <div className="flex gap-4">
            <img
              src="lockIcon.svg
            "
              alt=""
            />
            <p>Secure 256-bit SSL encryption.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
