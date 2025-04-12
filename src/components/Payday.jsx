import React from "react"
import { assets } from "../assets/assets"
import './Payday.css'

const Payday = ()=>{


    return (
    <div className="flex flex-col sm:flex-row border items-center justify-between paydayBackgroundGradient shadow-lg">
        
    <img src={assets.pay_day_girl} alt="Fashion model" className="w-full sm:w-1/2 " />

        <div className="flex flex-col px-8 py-3 text-left">
        <h1 className="text-5xl font-extrabold">PAYDAY</h1>
        <h1 className="text-5xl font-extrabold">SALE NOW</h1>
        <p className="mt-4 text-muted-foreground">spend minimal $100 get 30% off voucher code for your next purchase</p>
        <p className="mt-4 text-muted-foreground">1 June - 10 June 2021</p>
        <p className="mt-4 text-muted-foreground">*Terms and Conditions apply</p>
        <div className="mt-4"><a href="#" className="mt-6 text-secondary-foreground hover:bg-secondary/80 bg-black hover:bg-[#E5C643] hover:border-gray-500 border-black hover:text-black text-white  py-2 px-4 rounded-lg">
            Shop Now
        </a>
        </div>
        </div>
    </div>
    )
}

export default Payday