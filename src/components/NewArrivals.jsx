import React from "react";
import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const NewArrivals = () =>{
    const [latestProduct,setLatestProduct]=useState([])
    const {products}=useContext(ShopContext)

    useEffect(()=>{
        setLatestProduct(products.slice(0,3))
    },[products])
  return (
    <div className='my-10' id="gallery">
        <div className='text-left py-2 pb-2 text-3xl'>
        <div className='inline-flex gap-2 items-center mb-3'>
        <span className='text-black ml-5 font-extrabold'>NEW ARRIVALS</span>
        <p className='w-8 sm:w-12 h-[2px] bg-black'></p>
    </div>
        </div>
    {/* rendering items  */}
        <div className='flex flex-col sm:flex-row gap-x-5 px-5' >
                {
                    latestProduct.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                }
        </div>

    </div>

    )
}

export default NewArrivals