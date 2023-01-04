import React from 'react'
import classes from "./Cart.module.css"
import CartCard from './CartCard'

import { useSelector } from "react-redux";

const Cart = () => {
    const addedItems = useSelector(state => state.cart.item)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <>
            <div className={classes.container}>
                <div className={classes.itemContainer}>
                    {
                        addedItems.map((val) => {
                            return <CartCard {...val} key={val.id} val={val} />
                        })
                    }

                </div>

            </div>
            <div className={classes.totalprice}>
                <div className={classes.totalContainer}>
                    <h1>₹ {totalPrice}</h1>
                    <button>check out</button>
                </div>
            </div></>
    )
}

export default Cart