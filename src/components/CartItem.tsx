import { useShoppingCart } from "../context/ShoppingCartContext"
import  storeItems from "../data/items.json"
import { formatCurrency } from "../utilities/formatCurrency"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null ) return null
    return (
        <div className="flex flex-row gap-2 items-center">
            <img src={item.imgUrl}  className=" h-20 w-32 rounded-sm object-cover"/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className=" text-xs opacity-70">x{quantity}</span>}
                </div>
            <div className=" text-xs font-mono">{formatCurrency(item.price)}</div>
            </div>
        </div>
    )
}