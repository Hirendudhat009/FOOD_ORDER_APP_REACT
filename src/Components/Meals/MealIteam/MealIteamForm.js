import React, { useRef, useState } from 'react'
import Input from '../../UI/Input';
import classes from './MealIteamForm.module.css'

const MealIteamForm = (props) => {

    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input
            ref={amountInputRef}
            label="Amount"
            input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button >+Add</button>
        {!amountIsValid && <p>Please Enter a valid amount(1-5)</p>}
    </form>

}

export default MealIteamForm;