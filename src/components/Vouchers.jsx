import React from 'react'
import { assets } from '../assets/assets'

const Vouchers = () => {
  return (
    <div>
          <div className="flex flex-col sm:flex-row border items-center justify-between px-8 py-3 bg-[#F4F6F5] rounded-2xl shadow-lg">
              <div className="max-w-md flex flex-col items-center sm:ml-20">
              <div className="text-4xl font-extrabold text-primary">DOWNLOAD APP &</div>
              <div className="text-4xl font-extrabold text-primary">GET THE VOUCHER</div>
              <p className="mt-6 text-gray-500 text-muted-foreground">Get 30% off for first transaction using</p>
              <p className="mb-6 text-gray-500 text-muted-foreground">Rondovision mobile app for now</p>

              <div className='flex flex-row gap-10 justify-center'>
                <a href="https://nickelfox.com" target='_blank'><img src={assets.google_play} alt="google play image link" width={'100px'}/></a>
                <a href="https://nickelfox.com" target='_blank'><img src={assets.i_app_store} alt="app store image link" width={'100px'} /></a>
              </div>
              </div>
          
              <img src={assets.app_form} alt="Fashion model" className="w-full sm:w-1/2 rounded-lg" />
          </div>
    </div>
  )
}

export default Vouchers
