import React, {useState, useContext, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const YoungsFavourite = () => {

        const [latestProduct,setLatestProduct]=useState([])
        const {products}=useContext(ShopContext)
    
        useEffect(()=>{
            setLatestProduct(products.slice(3,5))
        },[products])
  return (
    <div>     
          <div className="text-3xl font-extrabold text-left my-20 ml-10">Young's Favourite</div>


            {/* rendering items  */}
            <div className='flex flex-col sm:flex-row gap-x-5 px-5 '>
                {
                    latestProduct.map((item,index)=>(
                        <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} description={item.description}/>
                    ))
                }
        </div>

    </div>
  )
}

export default YoungsFavourite
