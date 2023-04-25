import { Card} from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"


type StoreItemProps  = {
    id: number
    name: string
    price: number
    imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }:StoreItemProps) {
    const { getItemQuantity,
         increaseCartQuantity,
         decreaseCartQuantity,
         removeFromCart} = useShoppingCart()

    const quantity = getItemQuantity(id)
    return (
        <Card className="h-full">
            <Card.Img src={imgUrl}  className=" h-52 w-fit- rounded-sm object-cover"/>
            <Card.Body className="flex flex-col   mb-4">
                <Card.Title className="flex justify-between align-baseline mb-4 ">
                    <span className="font-semibold">{name}</span> 
                    <span className="ms-2 opacity-90">{formatCurrency (price) }</span> 
                </Card.Title>
                <div className="mt-auto">
                    { quantity === 0 ? 
                    (
                       <button className="w-full bg-green-500  text-white font-bold hover:bg-green-400" onClick={() => increaseCartQuantity(id)}> + Add To Cart</button>
                    ) : <div className="flex flex-col items-center gap-2">
                           <div className="flex items-center justify-center gap-2">
                              <button className="w-5 bg-green-400 rounded-sm text-white  hover:bg-green-500" onClick={() => decreaseCartQuantity(id)}>-</button>
                              <div>
                                 <span className="font-bold">{quantity}</span> in Cart
                              </div>
                              <button className=" w-5 bg-green-400 rounded-sm text-white  hover:bg-green-500  " onClick={() => increaseCartQuantity(id)}>+</button>
                           </div>
                           <button className=" w-20 bg-red-500 rounded-sm text-white  hover:bg-red-700" onClick={() => removeFromCart(id)}>Remove</button>
                        </div>}
                </div>
            </Card.Body>
      
        </Card>
    )
}