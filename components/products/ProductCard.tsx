import ButtonSimple from "../ui/buttons/ButtonSimple";

export default function ProductCard({product}: any) {
    return (
        <div className="bg-[var(--bg-card)] pb-2
                        text-center
                        shadow-2xl
                        border-1
                        border-[var(--accent-color)]">
            <img className="w-full max-w-[490px] max-h-[400px]
                            m-auto" 
                            src={product.image} alt="Imagen de un postre delicioso" />
            <p className="text-xl text-[var(--color-price)]
                          my-2">${product.price_pen}</p>
            <h3 className="text-2xl
                           md:text-3xl">{product.prod_name}</h3>
            <ButtonSimple text="Add to Cart" />
        </div>
    )
}