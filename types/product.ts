export type Product = {
    prod_id: number;
    prod_name: string;
    slug: string;
    category: "torta" | "postre";
    price_pen: number;
    stock: number;
    rating: number;
    reviews_count: number;
    description: string;
    image: string;
};

export type CartItem = Product & {
    quantity: number;
}