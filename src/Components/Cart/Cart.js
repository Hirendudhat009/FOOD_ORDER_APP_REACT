import React, { useContext, useState } from 'react'
import CartContext from '../Store/cart-context'
import Model from '../UI/Model';
import CartItem from './CartIteam';
import classes from './Cart.module.css'
import CheckOut from "./CheckOut";


const Cart = (props) => {
    const [isCheckOut, setIsCheckOut] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [isOrderSubmited, setIsOrderSubmited] = useState(false)


    const ctx = useContext(CartContext)
    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
    const hasIteam = ctx.iteams.length > 0

    const iteamRemoveHandler = (id) => {
        ctx.removeIteam(id)
    }

    const iteamAddHandler = (iteams) => {
        ctx.addIteam({ ...iteams, amount: 1 })
    }

    const cartIteam = <ul className={classes['cart-items']}>{
        ctx.iteams.map((iteam) =>
            <CartItem
                key={iteam.price}
                name={iteam.name}
                price={iteam.price}
                amount={iteam.amount}
                onRemove={iteamRemoveHandler.bind(null, iteam.id)}
                onAdd={iteamAddHandler.bind(null, iteam)}
            />)
    }</ul>

    const orderHandler = () => {
        setIsCheckOut(true)
    }

    const submitOrderHandler = async (userData) => {
        console.log(userData);
        setIsSubmit(true)
        await fetch('https://react-http-54965-default-rtdb.firebaseio.com/order.json', {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                orderIteams: ctx.iteams
            })
        })
        setIsSubmit(false)
        setIsOrderSubmited(true)
        ctx.clearCart()
    }

    const modalActions = (
        <div className={classes.actions}>
            <button
                className={classes['button--alt']}
                onClick={props.hideCart}>
                Close</button>
            {hasIteam && <button className={classes.button} onClick={orderHandler}>Order</button>
            }
        </div>
    )

    const data =
        <React.Fragment>
            {cartIteam}
            < div className={classes.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            {isCheckOut && <CheckOut onData={submitOrderHandler} onCancel={props.hideCart} />}
            {!isCheckOut && modalActions}
        </React.Fragment>


    const processOrder = <p>Your order is under poroces </p>
    const completeOrder = <p>Your order submited Successfully</p>

    return (
        <Model hideCart={props.hideCart}>
            {!isSubmit && !isOrderSubmited && data}
            {isSubmit && processOrder}
            {isOrderSubmited && !isSubmit && completeOrder}
        </Model >
    )

}

export default Cart;