import { CartItem } from "@/types/product";
import  ItemCart from "./ItemCart";
import ButtonSimple from "../ui/buttons/ButtonSimple";

type Props =  {
    products: CartItem[];
    onClose?: () => void;
}

export default function CartModal({onClose, products }: Props) {
    console.log(products)
    return (
        <div onClick={onClose} className="fixed 
                                          inset-0 
                                          flex 
                                          items-center 
                                          justify-center 
                                          bg-black/50 
                                          z-99999">
            <div className="min-w-[600px] m-auto bg-[var(--color-black)]" 
                 onClick={(e) => e.stopPropagation()}>
                
                <h1 className="py-5 pl-4 text-3xl">Tu Carrito</h1>
                
                { products ?  (products.map((p) => ( 
                    <ItemCart key={p.prod_id} product={p} />
                )))
                  : <p>Tu carrito esta vacio. 😥</p> 
                }

                <div className="text-center py-4">
                    <p className="text-xl">Total: <span className="text-[var(--color-price)] size-bold">s/. {products.reduce((total , p) => (total + (p.price_pen * p.quantity)), 0) || 0}</span></p>
                    <ButtonSimple urlImage="/images/icons/cashon.png" alt="Imagen de boton pagar" text="Finalizar Compra" />
                </div>
            </div>
            
        </div>
    )
}