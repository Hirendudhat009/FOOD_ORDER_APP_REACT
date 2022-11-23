import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
    iteams: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        const existingCartIteamIndex = state.iteams.findIndex(
            (iteam) => iteam.id === action.iteams.id)

        const existingCartIteam = state.iteams[existingCartIteamIndex]
        let updatedIteams

        if (existingCartIteam) {
            const updatedIteam = {
                ...existingCartIteam,
                amount: existingCartIteam.amount + action.iteams.amount
            };
            updatedIteams = [...state.iteams]
            updatedIteams[existingCartIteamIndex] = updatedIteam
        }
        else {
            updatedIteams = { ...action.iteams }
            updatedIteams = state.iteams.concat(action.iteams);
        }

        const updatedAmount = state.totalAmount + action.iteams.price * action.iteams.amount;
        return {
            iteams: updatedIteams,
            totalAmount: updatedAmount
        }
    }
    if (action.type === 'REMOVE') {

        const existingCartIteamIndex = state.iteams.findIndex(
            (iteam) => iteam.id === action.id)

        const existingIteam = state.iteams[existingCartIteamIndex]
        const updatedAmount = state.totalAmount - existingIteam.price
        let updatedIteams;

        if (existingIteam.amount === 1) {
            updatedIteams = state.iteams.filter(iteam => iteam.id !== action.id)
        }
        else {
            const updatedIteam = { ...existingIteam, amount: existingIteam.amount - 1 }
            updatedIteams = [...state.iteams]
            updatedIteams[existingCartIteamIndex] = updatedIteam;
        }

        return {
            iteams: updatedIteams,
            totalAmount: updatedAmount
        }

    }
    if (action.type === "CLEAR") {
        return defaultCartState;
    }
    return defaultCartState;
}



const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)


    const AddIteamhandler = (iteams) => {
        dispatchCartAction({ type: 'ADD', iteams: iteams })
    }

    const RemoveIteamhandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    const EmptyCartHandler = () => {
        dispatchCartAction({ type: 'CLEAR' })
    }

    const cartContext = {
        iteams: cartState.iteams,
        totalAmount: cartState.totalAmount,
        addIteam: AddIteamhandler,
        removeIteam: RemoveIteamhandler,
        clearCart: EmptyCartHandler,
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;