import { getProducts } from "@/lib/products";

export default async function ProductsPage() {
    const products = await getProducts()
    return products
}