'use client'

import { Item } from '@/types/type';
import React, { createContext, useContext, useState } from 'react';


interface CartContextType {
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (item: Item) => void;
  cantidad: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Item[]>([]);

const addToCart = (item: Item) => {
    console.log('Adding to cart:', item);
    setCart([...cart, item]);
    
};

const removeFromCart = (item: Item) => {
    setCart(cart.filter(i => i !== item));
};

const cantidad = cart.length;

return (
    <CartContext.Provider value={{ cantidad, cart, addToCart, removeFromCart }}>
        {children}
    </CartContext.Provider>
);
};

export default CartContext;