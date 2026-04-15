import ButtonSimple from "../ui/buttons/ButtonSimple";

export default function ProductCard({product}: any) {
    return (
        <div className="bg-[var(--color-black)] pb-2
                        text-center
                        shadow-2xl
                        border-1
                        border-[var(--accent-color)]">
            <img className="w-full max-w-[300px] max-h-[400px] m-auto
                            opacity-95" src={product.image} alt="Imagen de un postre delicioso" />
            <p className="text-xl my-1">${product.price}</p>
            <h3>{product.title}</h3>
            <ButtonSimple text="Add to Cart" />
        </div>
    )
}