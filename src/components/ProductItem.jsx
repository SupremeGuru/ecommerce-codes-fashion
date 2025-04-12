import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, name, price, image }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
      <div className='overflow-hidden'>
        <img
          className='hover:scale-110 ease-in-out duration-300'
          src={image?.[0] || 'default-image-path.jpg'} 
          alt={name}
        />
      </div>
      <p className='pt-3 pb-1 text-2xl font-bold text-black text-left'>{name}</p>
      <p className=' pb-1 text-xs text-gray-600 text-left'>Explore Now!</p>
    </Link>
  );
};

export default ProductItem;
