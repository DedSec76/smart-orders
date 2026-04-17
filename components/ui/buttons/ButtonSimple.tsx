
export default function ButtonSimple({text="", urlImage=""}) {
    return (
        <button className="bg-[var(--accent-color)]
                           my-4
                           py-3 px-6
                           text-black
                           text-lg
                           rounded-4xl
                           cursor-pointer
                           hover:text-white hover:bg-[var(--secondary-color)]"
        >{text} {urlImage ? <img src={urlImage} alt={`Imagen del boton ${text}`} /> : "" }
        </button>
    )
}