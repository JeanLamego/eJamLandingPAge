import React from 'react'



const Header = () => {
  return (
    <div>
        <div className='flex justify-around w-full h-[50px] border border-white text-white text-xs capitalize'>
        <div className='flex items-center'><img className="mr-2" src="checkMarkIcon.svg"/><p>30-DAY SATISFACTION GUARANTEE</p></div>
        <div className='flex items-center'><img className="mr-2" src="truckIcon.svg"/>   <p>Free delivery on orders over $40.00</p></div>
        <div className='flex items-center'><img className="mr-2" src="heartIcon.svg"/>    <p>50.000+ HAPPY CUSTOMERS</p></div>
        <div className='flex items-center'><img className="mr-2" src="moneyBackIcon.svg"/><p>100% Money Back Guarantee</p></div>
        </div>

        <div className='bg-white w-full h-24 flex justify-between items-center px-32 py-7'>
            <img className="w-48 h-9" src="clarifionLogo.png" alt="" />
            <div className='flex gap-8'>
                <img src="mcafeeLogo.svg" alt="" />
                <img src="nortonLogo.svg" alt="" />
            </div>
            

        </div>
    </div>
    
  )
}

export default Header