import { ReactNode, createContext, useContext } from "react";

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCaet: (id: number) => void
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

export function ShoppingCartProvider({ children }: ShoppingCartContextProps) {
    return <ShoppingCartContext.Provider value={{}}>
        {children}
    </ShoppingCartContext.Provider>
}