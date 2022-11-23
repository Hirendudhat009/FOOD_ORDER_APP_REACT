import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../Store/cart-context'

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext)

    const numberOfItems = ctx.iteams.reduce((curNumber, iteam) => {
        return curNumber + iteam.amount;
    }, 0)

    return <button className={classes.button} onClick={props.showCart}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {numberOfItems}
        </span>
    </button >

}

export default HeaderCartButton;