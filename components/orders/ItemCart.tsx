import { CartItem } from "@/types/product";
import Image from "next/image";
import ButtonSimple from "../ui/buttons/ButtonSimple";

type Props = {
    product: CartItem
}

export default function ItemCart({product}: Props) {
    return (
        <div className="flex flex-row items-center gap-4 pl-3
                        border-b-1 border-[var(--accent-color)] last:border-b-0">
            <Image  
                className="rounded-[100%]"
                src={product.image}
                alt={`Imagen de articulo de la lista ${product.category} ${product.prod_name}`}
                width={100}
                height={100}
            />
            <h2>{product.prod_name}</h2>
            <p>s/. {product.price_pen.toFixed(2)}</p>
            <p>Qty: {product.quantity}</p>
            <p>Cat: {product.category}</p>

            <ButtonSimple urlImage="/images/icons/delete.png" alt="Eliminar"/>
        </div>
    )
}