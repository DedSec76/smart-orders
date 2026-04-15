import ButtonSimple from "../ui/buttons/ButtonSimple";

export default function ProductCard() {
    return (
        <div className="bg-[var(--color-black)] pb-2
                        text-center
                        shadow-2xl
                        border-1
                        border-[var(--accent-color)]">
            <img className="w-full opacity-95" src="images/postres/pastelArandanos.webp" alt="Imagen de un postre delicioso" />
            <p className="text-xl my-1">$4.52</p>
            <h3>Pastel de Arándanos</h3>
            <ButtonSimple text="Add to Cart" />
        </div>
    )
}