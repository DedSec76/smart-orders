"use client"

import Image from "next/image";
import ButtonSimple from "../ui/buttons/ButtonSimple";
import { Product } from "@/types/product";

type Props = {
    product: Product;
}

export default function ProductCard({product}: Props) {
    return (
        <div className="bg-[var(--bg-card)] pb-2
                        text-center
                        shadow-2xl
                        border
                        border-[var(--accent-color)]
                        hover:scale-102 transition">
            <a href={`/products/${product.slug}`}> 
                <Image 
                    src={product.image}
                    alt={`Imagen de ${product.prod_name} a solo ${product.price_pen}`}
                    loading="eager"
                    width={500}
                    height={500}
                    className="w-full max-w-[490px] max-h-[400px] m-auto"
                />

                <p className="text-2xl text-[var(--color-price)]
                            my-2">s/. {product.price_pen.toFixed(2)}</p>
                <h3 className="text-2xl
                            md:text-3xl">{product.prod_name}</h3>
            </a>
            <ButtonSimple onClick={() => addToCart({product})}
                          text="Add to Cart" />
        </div>
    )

    type CartItem = Product & {
        quantity: number;
    }

    function addToCart({product} : Props) {
        try {
            const cart : CartItem[] = JSON.parse(localStorage.getItem("so-cart") || "[]");
            const found = cart.find((c) => c.prod_id === product.prod_id)
            
            const newProd: CartItem = {...product,  quantity: 1}
            
            if(found) {
                found.quantity++
            } else {
                cart.push(newProd)
            }

            localStorage.setItem("so-cart", JSON.stringify(cart))
        
        } catch (error) {
            console.error("Error to AddToCart: "+error)
        }
    }
}

