'use client'
import React, { useState } from 'react'

interface ItemCartProps {
    id: number;
    name: string;
    price: number;
}

interface ButtonItemProps {
    price: number;
}

const ButtonItem: React.FC<ButtonItemProps> = ({price}) => {
const [cantidad, setCantidad] = useState(1)

const add = () => {
    setCantidad(cantidad + 1)
    console.log(cantidad)
}

const subtract = () => {
    setCantidad(cantidad - 1) 
    console.log(cantidad) 
}
  return (
    <div className="flex items-center">
      <div className=' flex  text-sm'>
        <button className="px-1 rounded-l bg-red-500" onClick={() => subtract()} disabled={cantidad===1} >-</button>
        <span className="px-2 border-l border-r block border-gray-600 bg-gray-200">{cantidad}</span>
        <button className="px-1 rounded-r bg-green-500" onClick={() => add()} >+</button>
      </div>
    <span className="ml-4">${price}</span>
  </div>
  )
}


const ItemCart: React.FC<ItemCartProps> = ({id, name, price}) => {
  return (
    <div className="flex justify-between items-center">
        <div className="flex items-center">
            <input type="checkbox" defaultChecked className="mr-2" />
            <span>{name}</span>
        </div>
       <ButtonItem price={price} key={id} />
    </div>
  )
}

export default ItemCart