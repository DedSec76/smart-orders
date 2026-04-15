
export default function Anchor({ text="", href="#"}) {
    return (
        <a className="block md:flex md:w-64 md:m-auto md:justify-center
                      text-xl text-center
                      mt-2 py-4 bg-[var(--primary-color)] text-black rounded
                      
                      hover:text-[var(--neutro-white-color)]
                      hover:bg-[var(--color-black)]
                      transition duration-500
                       
                      " href={href}>{text}</a>
    )
}