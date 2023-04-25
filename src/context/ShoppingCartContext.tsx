import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]

}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

// provider function gives all the valuees & for rendering out shopping cart

// anytime a provider is used it has to have children inside of it

type ShoppingCartContextProps = {
    children: ReactNode
}

type CartItem ={
    id: number
    quantity: number
}

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
    const [cartItems, setCartItems] = useState<CartItem[]> ([])

    function getItemQuantity(id:number) {
        return cartItems.find(item => item.id === id)?.quantity || 0
        
    }

    function increaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null) {
                return [...currItems, {id, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item,quantity: item.quantity + 1}
                    } else { 
                        return item 
                    }
                }) 
            }

        })
        
    }

    function decreaseCartQuantity(id:number) {
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id)?.quantity === 1) {
                return currItems.filter (item => item.id !== id)
            } else {
                return currItems.map(item => {
                    if (item.id === id) {
                        return { ...item,quantity: item.quantity - 1}
                    } else { 
                        return item 
                    }
                }) 
            }

        })
        
    }

    function removeFromCart(id:number) {
        setCartItems(currItems => {
            return currItems.filter (item => item.id !== id)
        })
    }


    return <ShoppingCartContext.Provider
              value={{
                getItemQuantity,
                increaseCartQuantity, 
                decreaseCartQuantity, 
                removeFromCart,
                cartItems
            }}
                >
        {children}
    </ShoppingCartContext.Provider>
}