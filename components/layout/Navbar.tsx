"use client"

import React from "react"
import Link from "../ui/anchors/Link"

type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Navbar({ isOpen, setIsOpen } : Props) {
 return (
    <nav onClick={() => setIsOpen(!isOpen)} 
        className={isOpen ? "mt-4 flex flex-col items-center gap-7": "hidden"} >
        <Link href="./" text="Home" />
        <Link href="./about" text="About Us" />
        <Link href="./dessert" text="More Desserts" />
        <Link href="./order" text="Order Now"/>
    </nav>
 )
}