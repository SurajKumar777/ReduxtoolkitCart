import React from 'react'
import Button from '../components/Button'
import Card from '../components/Card'
import classes from "./FoodCard.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { add, deleteItem } from '../Redux/CartSlice'

const FoodCard = ({ id, title, img, price, val }) => {
    const item = useSelector(state => state.cart.item)
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <img src={img} alt="img1" />
            <div className={classes.info}>
                <h3>{title}</h3>
                <p>₹ {price}</p>
            </div>
            <div className={classes.button}>
                {
                    item.some((val) => val.id === id) ? <Button onClick={() => dispatch(deleteItem(id))} >delete</Button> : <Button onClick={() => dispatch(add(val))} >Add to Cart</Button>
                }


            </div>
        </Card>
    )
}

export default FoodCard