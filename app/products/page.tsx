import { Product } from "@/features/products/types/product.types"

export async function getProducts(): Promise<Product[]> {
    const res = await fetch('https://fakestoreapi.com/products')
    return res.json()
}