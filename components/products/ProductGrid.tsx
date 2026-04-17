import ProductCard from "./ProductCard";

export default async function ProductGrid({ products }: any) {
    
    return (
        <div className="grid gap-6 my-8 
                        md:grid-cols-2 lg:grid-cols-3"
        >
                
            {products.map((p:any) => (
                  <ProductCard key={p.prod_id} product={p} />   
            ))}
        </div>     
    )
}