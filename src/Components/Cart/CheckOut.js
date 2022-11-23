import { useRef, useState } from 'react'
import classes from './CheckOut.module.css'

const CheckOut = (props) => {
    const [isFormValidaty, setIsFormVAlidaty] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true
    })


    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const isEmpty = value => value.trim() === '';
    const isFiveChar = value => value.length === 5;

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const isValidName = !isEmpty(enteredName)
        const isValidStreet = !isEmpty(enteredStreet)
        const isValidPostal = isFiveChar(enteredPostal)
        const isValidCity = !isEmpty(enteredCity)

        setIsFormVAlidaty({
            name: isValidName,
            street: isValidStreet,
            postalCode: isValidPostal,
            city: isValidCity
        })


        const isFormValid =
            isValidName &&
            isValidStreet &&
            isValidPostal &&
            isValidCity;

        if (!isFormValid) {
            return;
        }

        props.onData({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostal,
            city: enteredCity
        })
    }

    const nameControlClass = `${classes.control} ${isFormValidaty.name ? '' : classes.invalid}`
    const streetControlClass = `${classes.control} ${isFormValidaty.street ? '' : classes.invalid}`
    const postalControlClass = `${classes.control} ${isFormValidaty.postalCode ? '' : classes.invalid}`
    const cityControlClass = `${classes.control} ${isFormValidaty.city ? '' : classes.invalid}`


    return <form className={classes.form} onSubmit={submitHandler}>
        <div className={nameControlClass}>
            <label htmlFor="text">Your Name</label>
            <input type="text" id="text" ref={nameInputRef} />
            {!isFormValidaty.name && <p>Please enter a valid name</p>}
        </div>
        <div className={streetControlClass}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!isFormValidaty.street && <p>Please enter a valid street</p>}
        </div>
        <div className={postalControlClass}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalInputRef} />
            {!isFormValidaty.postalCode && <p>Please enter a valid postal code</p>}
        </div>
        <div className={cityControlClass}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!isFormValidaty.city && <p>Please enter a valid city</p>}
        </div>
        <div className={classes.actions}>
            <button onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit} onSubmit={props.onData}>Confirm </button>
        </div>
    </form>

}

export default CheckOut;