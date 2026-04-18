"use client";

type Props = {
    isFixed?: boolean;
    text?: string;
    urlImage?: string;
    onClick?: () => void;
}

export default function ButtonSimple({onClick, isFixed=false, text, urlImage}: Props) {
    return (
        <button onClick={onClick}
                className={`${isFixed ? "fixed z-2000 top-22 right-6 xl:right-30" : ""}
                           bg-[var(--accent-color)]
                           my-4
                           py-3 px-6
                           text-black
                           text-lg
                           rounded-4xl
                           cursor-pointer
                            hover:text-white hover:bg-[var(--secondary-color)]`}
        >   {text} {urlImage ? <img src={urlImage} alt={`Imagen del boton ${text}`} /> : "" }
        </button>
    )
}