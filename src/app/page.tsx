'use client'

import MenuCarousel from "@/components/MenuCarousel";
import ShoppingCartModal from "@/components/ShoppingCart";
import { useCart } from "@/context/CartContext";
import { use, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Item } from "@/types/type";
import ItemMenu from "@/components/ItemMenu";
import { Head } from "next/document";
import Link from "next/link";
import Modal from "@/components/Modal";


const items: Item[] = [
  { id: 1, image: 'https://placehold.co/100x100', name: 'Crispy Chicken', price: 2 },
  { id: 2, image: 'https://placehold.co/100x100', name: 'Sushi', price: 0.5 },
  { id: 3, image: 'https://placehold.co/100x100', name: 'Open Now', price: 1.5 },
  { id: 4, image: 'https://placehold.co/100x100', name: 'Ice Cream', price: 1.2 },
  { id: 5, image: 'https://placehold.co/100x100', name: 'Crispy Chicken', price: 2 },
  { id: 6, image: 'https://placehold.co/100x100', name: 'Sushi', price: 0.5 },
  { id: 7, image: 'https://placehold.co/100x100', name: 'Open Now', price: 1.5 },
  { id: 8, image: 'https://placehold.co/100x100', name: 'Ice Cream', price: 1.2 },
];



export default function HomePage() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cantidad } = useCart();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  


  return (
<>
    <ShoppingCartModal isOpen={isModalOpen} toggleModal={toggleModal}  />

    
<div className="w-full mx-auto py-8 bg-zinc-200">

  
  <div className="text-center max-w-4xl mx-auto mb-6 fixed top-0 left-0 bg-red-400 right-0 p-2 border-b-2 border-gray-400 shadow-lg">
    <div className="flex justify-between items-center mx-3">
      <h1 className="text-2xl font-bold">D’ ROBERT ASADERO</h1>
      <div className="relative pl-6 cursor-pointer" onClick={()=> toggleModal()}>
        <MdOutlineShoppingCart className="text-4xl mr-4" />
        <span className="absolute text-sm -top-2 -right-2 bg-yellow-500 text-white px-2 py-1 rounded-full">{cantidad}</span>
      </div>
    </div>

    <div className="flex gap-1 mt-2 px-6 overflow-x-auto">
      <button className="bg-yellow-500 text-white px-4 py-1 rounded-full">Todos</button>
      <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
        Plato
      </button>
      <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
        Asados
      </button>
      <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
        Jugos
      </button>
      <button className="bg-zinc-200 text-zinc-800 px-4 py-1 rounded-full dark:bg-zinc-700 dark:text-zinc-300">
        Subw
      </button>
      
  </div>


  </div>
 
  <div className="grid grid-cols-2 gap-4 bg-zinc-200 p-2 mt-16">

    {
      items.length > 0 &&
      items.map((item) => (
        <ItemMenu key={item.id} image={item.image} name={item.name} price={item.price}  />

      ))
    }


  </div>

  
</div>

</>
  
  );
}
