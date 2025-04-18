import React from 'react'

const ShopName = ({text1,text2}) => {
  return (
    <div className='inline-flex items-center'>
        <p className='text-gray-500'> {text1} <span className='text-gray-700 font-medium'>{text2}</span></p>
    </div>
  )
}

export default ShopName