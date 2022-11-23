import React from 'react'

const CartContext = React.createContext({
    iteams: [],
    totalAmount: 0,
    addIteam: (iteam) => { },
    removeIteam: (id) => { },
    clearCart: () => { }
})

export default CartContext;