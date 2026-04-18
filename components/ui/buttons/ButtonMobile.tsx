import React from "react"

type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ButtonMobile({ isOpen, setIsOpen }: Props ) {
    return(
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-10 right-6 text-5xl cursor-pointer
                        hover:text-black transition duration-300
                        md:hidden" 
            
            aria-label="Open navegation Menu">
            <span 
                className={`inline-block transition duration-300 ${ 
                    isOpen ? "rotate-180 opacity-80" : ""}`}>             
                {isOpen ? "❌" : "☰"}
            </span>
        </button>
    )
}