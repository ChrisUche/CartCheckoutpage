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
        <div className="flex flex-row gap-2 items-center p-2">
            <img src={item.imgUrl}  className=" h-20 w-20 rounded-sm object-cover"/>
            <div className="me-auto">
                <div>
                    {item.name} {quantity > 1 && <span className=" text-xs opacity-70">x{quantity}</span>}
                </div>
            <div className=" text-xs/[17px]  font-mono">{formatCurrency(item.price)}</div>
            </div>
            <div className=" text-xs font-mono">{formatCurrency(item.price * quantity)}</div>
            <button className="w-5 h-5 rounded" onClick={() => removeFromCart(item.id)}>&times;</button>

        </div>
    )
}