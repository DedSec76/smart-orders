"use client"

import { useState } from "react";
import ButtonMobile from "../ui/buttons/ButtonMobile";
import CupIcon from "../ui/icons/CupIcon";
import Navbar from "./Navbar";
import ButtonSimple from "../ui/buttons/ButtonSimple";
import CartModal from "../orders/CartModal";
import { CartItem } from "@/types/product";


type Props =  {
    products: CartItem[];
    isCartOpen: boolean
}

export default function Header() { 
    const [isOpen, setIsOpen] = useState(false)
    const [isCartOpen, setIsCartOpen] = useState(false)

    const [cart, setCart] = useState<CartItem[]>([])
    console.log(cart)
    return (
        <header className="py-8 px-6 
                           md:flex flex-row justify-between items-center max-w-[1300px] m-auto">
            <CupIcon className="w-16 h-16 text-[var(--primary-color)]" />

            <ButtonMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            
            <ButtonSimple 
                isFixed={true} 
                urlImage="/images/icons/cart32.png"
                onClick={openCart}
            />

            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

            { isCartOpen && (
                <CartModal 
                    products={cart}
                    onClose={() => setIsCartOpen(false)} 
                />
            )}
        </header>
    )

    function openCart() {
        const data = JSON.parse(localStorage.getItem("so-cart") || "[]")
        setCart(data)
        setIsCartOpen(true)
    }
}