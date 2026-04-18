"use client"
import { createContext, useContext, useState, useEffect } from "react"
import { CartItem } from "@/types/product"

type CartContextType = {
    cart: CartItem[]
    addToCart: (product: CartItem) => void 
    isCartOpen: boolean
    setIsCartOpen: (v: boolean) => void 
}

const CartContext = createContext<CartContextType | null>(null) 