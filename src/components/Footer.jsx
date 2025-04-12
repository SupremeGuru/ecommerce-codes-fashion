import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className=''>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr_1fr] bg-black text-white py-20 '>

      <div className='flex flex-col text-left items-center mt-5'>
        <h1 className='text-3xl font-extrabold mb-4 '>FASHION</h1>
        <a className='text-gray-400'>Complete your style with awesome</a>
        <a className='text-gray-400'>clothes from us.</a>
        <div className='flex gap-5 mt-4'>
            <a href="www.nickelfox.com"><img src={assets.instagram_logo} alt="" /></a>
            <a href="www.nickelfox.com"><img src={assets.linkedin_logo} alt="" /></a>
            <a href="www.nickelfox.com"><img src={assets.twitter_logo} alt="" /></a>
            <a href="www.nickelfox.com"><img src={assets.facebook_logo} alt="" /></a>
        </div>
      </div>


      <div className='flex flex-col text-left items-center mt-5'>
        <a className='text-xl' href="">Company</a>
        <a href="" className='text-gray-400 mt-4'>About</a>
        <a href="" className='text-gray-400 mt-4'>Contact Us</a>
        <a href="" className='text-gray-400 mt-4'>Support</a>
        <a href="" className='text-gray-400 mt-4'>Careers</a>
      </div>
      <div className='flex flex-col text-left items-center mt-5'>
        <a className='text-xl' href="">Quick Link</a>
        <a href="" className='text-gray-400 mt-4'>Share Location</a>
        <a href="" className='text-gray-400 mt-4'>Orders Tracking</a>
        <a href="" className='text-gray-400 mt-4'>Size Guide</a>
        <a href="" className='text-gray-400 mt-4'>FAQs</a>
      </div>
    <div className='flex flex-col text-left items-center mt-5'>
        <a className='text-xl' href="">Legal</a>
        <a href="" className='text-gray-400 mt-4'>Terms & Conditions</a>
        <a href="" className='text-gray-400 mt-4'>Privacy Policy</a>
    </div>

      
    </div>
</div>
  )
}

export default Footer
