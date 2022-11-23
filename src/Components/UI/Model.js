import { Fragment } from 'react'
import ReactDom from 'react-dom'
import classes from './Model.module.css'


const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.hideCart} />
}

const ModelOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Model = (props) => {
    return <Fragment>
        {ReactDom.createPortal(<Backdrop hideCart={props.hideCart} />, portalElement)}
        {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay>, portalElement)}
    </Fragment>
}

export default Model;