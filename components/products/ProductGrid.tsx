import Anchor from "../ui/anchors/Anchor";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
    return (
        <article>
            <header>
                <h2>Nuestros Postres Destacados</h2>
                <p>Aprovecha la oportunidad por tiempo limitado...</p>
            </header>

            <div className="my-8">
                <ProductCard />
            </div>

            <Anchor href="desserts.html" text="More Desserts" />
        </article>
            
    )
}