import ProductGrid from "@/components/products/ProductGrid";
import Hero from "@/components/sections/Hero";
import { getProducts } from "@/app/products/page";
import { Product } from "@/features/products/types/product.types";
import Anchor from "@/components/ui/anchors/Anchor";

export default async function Home() {
    const products: Product[] = await getProducts()
    const only3 = products.slice(0, 3)

  return (
    <>
        <Hero />

        <article>
            <h2>Nuestros Pasteles Destacados</h2>
            <p>Aprovecha esta oportunidad que es por tiempo limitado...</p>
        
            <ProductGrid products={only3} />

            <Anchor href="/desserts" text="More Desserts" />
        </article>

        <article className="services">
            <header>
                <h2>Our Grandma's Ponche Services</h2>
                <p>“We sweeten your moments with the taste of home.”</p>
                <p>or</p>
                <p>“Because every occasion deserves the gentle touch of Grandma's Ponche.”</p>
            </header>

            <div className="grid">
                <div className="service">
                        <h4>Direct sale of handcrafted goods</h4>
                    <p>We make our ponche with fresh ingredients and homemade techniques, ready to enjoy at just the right level of foam and sweetness.
                       (Ideal for: local delivery, online orders, or brick-and-mortar stores.)</p>
                </div>
                <div className="service">
                    <h4>
                        Personalized presentations</h4>
                    <p>From individual jars to family bottles, we adapt the presentation for your gatherings, gifts, or special events.
                       (It reinforces the product's artisanal and versatile value.)</p>
                </div>
                <div className="service">
                    <h4>
                        Ponche for events</h4>
                    <p>We bring the taste of home to your celebrations. We offer service for birthdays, baptisms, weddings, and family reunions.
                      (You can accompany it with photos of ponches served in decorative glasses or jars.)</p>
                </div>
            </div>
            
        </article>
        
        <section className="testimonial">
            <h2>Testimonial</h2>

            <div className="block">
                <p>“The first time I tried Grandma's Ponche, I was curious, and from that moment on, I fell in love.❤️</p>
                <p>It has such a smooth, frothy texture that it literally melts in your mouth. It's not cloying, it has just the right amount of sweetness and that creamy egg flavor that makes you feel like you're eating something homemade, made with love.</p>
                <p>It reminded me of the desserts my grandmother used to make when I was a child. Since then, every time I want to treat myself, I choose this ponche. I highly recommend it—there's nothing like it, it's like a sweet hug after a long day.”</p>
                <h4>Katharyna Fen</h4>
            </div>
        </section>
    </>
  )
}
