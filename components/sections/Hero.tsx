import Image from "next/image";
import Anchor from "../ui/anchors/Anchor";

export default function Hero() {
    return (
        <section className="flex flex-row
                            md:items-center">
            <div className="text-center">
                <h1>
                    Grandma's Cake
                </h1>
                <p className="my-4 max-w-[350px]">Siente la suavidad del pastel de la abuela en cada tajada</p>
                <Anchor text="Shop Now" />
            </div>
            
            <div>
                <Image 
                    src="/images/banners/main-hero-no-bg.png"
                    alt="Imagen principal de un pastel de tres leches esponjoso derramando su cubierta de leche"
                    width={500}
                    height={400}
                    className="w-full"
                />
            </div>
        </section>
    )
}