import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { XMarkIcon }  from '@heroicons/react/24/outline';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utilities/formatCurrency';
import  storeItems from "../data/items.json"



type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen } : ShoppingCartProps) {
    const { closeCart, cartItems } = useShoppingCart()
    return (
            <Drawer open={isOpen} onClose={closeCart} direction='right'>
                <span className='flex items-center p-1 justify-between '>
                <div> Cart </div>
                <XMarkIcon color="black" className="h-5 w-5 cursor-pointer" />
                </span>
                <body>
                    <div className='flex flex-col gap-3'>
                        {cartItems.map(item => 
                        <CartItem key={item.id} {...item} />)}
                    </div>
                    <div className='ml-20 font-bold text-xl'>Total{" "} {formatCurrency(cartItems.reduce((total, cartItems) => {
                        const item = storeItems.find(i => i.id === cartItems.id)
                        return total + (item?.price || 0) * cartItems.quantity
                    }, 0))}</div>
                </body>
            </Drawer>
    )
}