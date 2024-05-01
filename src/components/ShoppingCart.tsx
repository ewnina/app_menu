'use client'

import { useCart } from '@/context/CartContext';
import React from 'react';
import ItemCart from './ItemCart';
import { IoClose } from "react-icons/io5";

interface ShopingCartProps {
   isOpen: boolean;
   toggleModal: () => void;
}



const  ShoppingCartModal: React.FC<ShopingCartProps> = ({ toggleModal, isOpen }) => {
  const { cart } = useCart();
    
  return (
    <div>
     

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded">

            <div className='flex w-full justify-between items-center border-b-2 border-gray-200 p-2'>
            
              <h2 className="text-xl font-semibold">Shopping Cart</h2>
              <IoClose className="text-3xl cursor-pointer rounded-full bg-slate-200 p-2 hover:bg-gray-300" onClick={toggleModal} />

            </div>

           
           
            <div className="max-w-4xl mx-auto p-2 bg-white shadow-lg">
           
            <div className="space-y-4">

                {
                   cart.length > 0 && 
                     cart.map((item) => (
                       <ItemCart key={item.id} name={item.name} price={item.price} id={item.id} /> 
                    
                    ))
                }
              
               
               
            </div>
            <div className="border-t mt-4 pt-4">
                <div className="flex justify-between">
                <span>Tax 4%</span>
                <span>₹ 13.60</span>
                </div>
                <div className="flex justify-between mt-2">
                <span className="font-bold">Grand Total</span>
                <span className="font-bold">₹ 353.60</span>
                </div>
            </div>
            <div className="border-t mt-4 pt-4">
                <div className="flex justify-between items-center">
                <span>Ordering type</span>
                <select className="border p-2 rounded">
                    <option>On table</option>
                    <option>Takeaway</option>
                </select>
                </div>
            </div>
            <div className="mt-6">
                <button className="w-full bg-blue-500 text-white p-3 rounded" onClick={toggleModal} >Ordenar</button>

               	<a href="https://wa.me/18293839651?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" className="whatsapp" target="_blank"></a>
                
            </div>
            </div>


      
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartModal;
