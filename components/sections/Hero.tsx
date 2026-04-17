import Image from "next/image";
import Anchor from "../ui/anchors/Anchor";

export default function Hero({src=""}) {
    return (
        <section className="flex flex-row justify-around
                            md:items-center">
            <div className="text-center">
                <h1 className="text-5xl 
                               md:text-6xl">
                    Grandma's Cake
                </h1>
                <p className="my-4 max-w-[350px]
                              md:mt-7">Siente la suavidad del pastel de la abuela en cada tajada</p>
                <Anchor text="Shop Now" />
            </div>
            
            <div>
                <Image 
                    src={src}
                    alt="Imagen principal de un pastel de tres leches esponjoso derramando su cubierta de leche"
                    loading="eager"
                    width={500}
                    height={400}
                    className="w-full"
                />
            </div>
        </section>
    )
}