"use client"

import { useState } from "react";
import ButtonMobile from "../ui/buttons/ButtonMobile";
import CupIcon from "../ui/icons/CupIcon";
import Navbar from "./Navbar";

export default function Header() { 
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="py-8 px-6">
            <CupIcon className="w-16 h-16 text-[var(--primary-color)]" />

            <ButtonMobile isOpen={isOpen} setIsOpen={setIsOpen} />
            
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        </header>
    )
}