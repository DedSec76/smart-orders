import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

type Props = {
    products: Product[];
}

export default function ProductGrid({ products }: Props) {
    if(products.length === 0) {
        return <p>No hay productos disponibles</p>
    }

    return (
        <div className="grid gap-6 my-8 
                        md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
                  <ProductCard key={p.prod_id} product={p} />   
            ))}
        </div>     
    )
}