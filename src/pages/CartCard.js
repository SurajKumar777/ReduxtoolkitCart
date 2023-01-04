import React from 'react'
import classes from "./CartCard.module.css"
import Card from "../components/Card"
import Button from "../components/Button"
import { deleteItem, incQuantity, decQuantity } from "../Redux/CartSlice"
import { useDispatch, useSelector } from 'react-redux'

const CartCard = ({ id, img, title, price, quantity }) => {

    const dispatch = useDispatch();


    return (
        <>
            <Card className={classes.card}  >
                <div className={classes.imgContainer}>
                    <div className={classes.img}>
                        <img src={img} alt="img1" />
                    </div>
                    <div className={classes.info}>
                        <h3>{title}</h3>
                        <p>₹ {price}</p>
                    </div>
                </div>
                <div className={classes.counter}>
                    <Button onClick={() => dispatch(decQuantity(id))}>-</Button>
                    <p>{quantity}</p>
                    <Button onClick={() => dispatch(incQuantity(id))}>+</Button>
                </div>
                <div className={classes.button}>
                    <Button onClick={() => dispatch(deleteItem(id))} >delete</Button>
                </div>
            </Card>


        </>
    )
}

export default CartCard