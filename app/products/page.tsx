import ProductGrid from "@/components/products/ProductGrid";
import { getProducts } from "@/lib/products";

export default async function desserts() {
    const products = await getProducts()
    
    return (
        <ProductGrid products={products}/>
    )
}