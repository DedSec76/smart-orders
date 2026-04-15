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
        className={`mt-4 flex-col items-center gap-7
            ${isOpen ? "flex" : "hidden"} 
            md:flex md:flex-row justify-between
        `}
    >
        <Link href="./" text="Home" />
        <Link href="./about" text="About Us" />
        <Link href="./desserts" text="More Desserts" />
        <Link href="./order" text="Order Now"/>
    </nav>
 )
}