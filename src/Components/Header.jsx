import React from 'react';



const Header = () => {
    const data = [
        {
            id: '1',
            image: 'checkMarkIcon.svg',
            text: '30-DAY SATISFACTION GUARANTEE',
        },
        {
            id: '2',
            image: 'truckIcon.svg',
            text: 'Free delivery on orders over $40.00',
        },
        { id: '3', image: 'heartIcon.svg', text: '50.000+ HAPPY CUSTOMERS' },
        { id: '4', image: 'moneyBackIcon.svg', text: 'moneyBackIcon.svg' },
    ];
    return (
        <div>
            <div className="flex justify-around w-full sm:h-10lg:h-[50px] border border-white text-white text-xs uppercase">
                {data.map(item => (
                    <div key={item.id} className="flex items-center">
                        <img className="mr-2" src={item.image} />
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>

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
