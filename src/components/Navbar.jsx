import React, { useContext, useState } from "react";
import { assets } from "../assets/assets.js";
import { Link, NavLink } from "react-router-dom";
import RestaurantName from "./ShopName.jsx";
// import { ShopContext } from "../context/ShopContext.jsx";

const Navbar = () => {
  const [visible, setvisible] = useState(false);

//   const {setShowSearch,getCartCount}=useContext(ShopContext)

  return (
  <div className="flex items-center justify-between font-medium mb-3 p-2">
    <Link to={'/'} className="flex flex-row gap-2"><img src={assets.logo} alt="logo" className="w-6" />
    <RestaurantName text1={'DEEO'} text2={'RAMOC'} />
    </Link>
    <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
      <NavLink to="/catalogue" className="flex flex-col items-center gap-1 nav-link m-2">
        <p>CATALOGUE</p>
        <hr className="underline w-0 border-none h-[1.5px] bg-gray-700" />
      </NavLink>
      <NavLink
        to="/fashion"
        className="flex flex-col items-center gap-1 nav-link m-2"
      >
        <p>FASHION</p>
        <hr className="underline w-0 border-none h-[1.5px] bg-gray-700" />
      </NavLink>
      <NavLink
        to="/favourite"
        className="flex flex-col items-center gap-1 nav-link m-2"
      >
        <p>FAVOURITE</p>
        <hr className="underline w-0 border-none h-[1.5px] bg-gray-700" />
      </NavLink>
      <NavLink
        to="/lifestyle"
        className="flex flex-col items-center gap-1 nav-link m-2"
      >
        <p>LIFESTYLE</p>
        <hr className="underline w-0 border-none h-[1.5px] bg-gray-700" />
      </NavLink>
      <NavLink
        to="/signup"
        className="flex flex-col items-center gap-1 nav-link bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black"
      >
        <p>SIGNUP</p>
        {/* <hr className="underline w-0 border-none h-[1.5px] bg-white " /> */}
      </NavLink>
    </ul>

    <div className="flex items-center gap-5">
      <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" />

      <div className="group relative">
        <Link to={'/login'}  className="relative cursor-pointer"><img src={assets.profile_icon} className="w-5 cursor-pointer" /></Link>
        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">My Profile</p>
            <p className="cursor-pointer hover:text-black">Orders</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        </div>
      </div>

      <Link to="/cart" className="relative w-5 cursor-pointer">
        <img src={assets.cart_icon} className="w-5 sm:w-5 cursor-pointer" />
        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
          {/* {getCartCount()} */}
        </p>
      </Link>

      <img
        onClick={() => setvisible(true)}
        src={assets.menu_icon}
        className="w-5 cursor-pointer sm:hidden"
      />
    </div>

    {/* sidebar for menu  */}
    <div
      className={`absolute top-0 right-0  bottom-0 overflow-hidden bg-white transition-all ${
        visible ? "w-full" : "w-0"
      }`}
    >
      <div className="flex flex-col text-gray-600">
        <div
          onClick={() => setvisible(false)}
          className="flex items-center gap-4 p-3 "
        >
          <img src={assets.dropdown_icon} className="h-4 rotate-180" />
          <p className="cursor-pointer">Back</p>
        </div>
        <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to="/">HOME</NavLink>
        <NavLink onClick={()=>setvisible(false)}  className='py-2 pl-6 border' to="/collection">COLLECTION</NavLink>
        <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to="/about">ABOUT</NavLink>
        <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to="/contact">CONTACT</NavLink>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
