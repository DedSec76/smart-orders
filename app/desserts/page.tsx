import ProductGrid from "@/components/products/ProductGrid";
import { getProducts } from "@/app/products/page";
import { Product } from "@/features/products/types/product.types";


export default async function desserts() {
    const products: Product[] = await getProducts()
    const only3 = products.slice(0, 3)

    return (
        <ProductGrid products={products}/>
    )
}