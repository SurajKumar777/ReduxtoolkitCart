import React from 'react'
import Card from '../components/Card'
import classes from "./Navbar.module.css"
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cartCount = useSelector(state => state.cart.item)
    return (
        <div className={classes.container}>
            <Card className={classes.card}>
                <NavLink to="/" >home</NavLink>
                <NavLink to="/cart" >Cart <span className={classes.cartcount}>{cartCount.length}</span></NavLink>
            </Card>
        </div>
    )
}

export default Navbar