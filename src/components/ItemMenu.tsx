import React from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext';
import { Item } from '@/types/type';


interface ItemMenuProps {
    image: string;
    name: string;
    price: number;
}

const ItemMenu: React.FC<ItemMenuProps> = ({image, name, price}) => {
    const { addToCart } = useCart();

   
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
        <img src={image} alt="Crispy Chicken" />
        <p className="mt-2 font-semibold dark:text-white">{name}</p>
        <p className="text-yellow-600">${price}</p>
        <button 
            className="bg-yellow-500 text-white px-4 py-1 rounded-full mt-2"
            onClick={() => addToCart({id:1, image, name, price})}>
             Agregar
        </button>
   </div>
  )
}

export default ItemMenu