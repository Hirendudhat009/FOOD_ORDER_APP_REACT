import React from 'react'
import classes from './Input.css'

const Input = React.forwardRef((props, ref) => {
    return <div classes={classes.input}>
        <label htmlFor={props.input.id}>{props.label} </label>
        <input ref={ref} {...props.input} />
    </div>
})

export default Input;