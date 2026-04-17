import ProductGrid from "@/components/products/ProductGrid";
import { getProducts } from "@/lib/products";
import { Product } from "@/features/products/types/product.types";


export default async function desserts() {
    const products = await getProducts()
    
    return (
        <ProductGrid products={products}/>
    )
}