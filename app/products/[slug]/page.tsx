import { getProductBySlug } from "@/lib/products"
import Image from "next/image";

type Props = {
    params: {
        slug: string;
    };
};

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug)

    if (!product) {
        return <h1 className="my-4 text-4xl">Producto no encontrado</h1>
    }
    return (
        <div className="md:grid grid-cols-2">
            <h2 className="text-4xl mb-5 md:mb-0">{product.prod_name}</h2>
            <Image className="w-full rounded mb-5 md:mb-0
                              col-start-1
                              row-start-1
                              row-end-7" 
                src={product.image} 
                alt={`Imagen en detalle de ${product.prod_name}`}
                width={500}
                height={500}
            />
            <p className="text-center">{product.description}</p>
            
            <p className="col-start-2">s/. {product.price_pen}</p>
            <p className="col-start-2">Stock: {product.stock}</p>
            <p className="col-start-2">Rating: {product.rating}</p>
            <p className="col-start-2">Reviews: {product.reviews_count}</p>
        </div>
    )
}