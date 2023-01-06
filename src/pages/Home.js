import React from 'react'
import FoodCard from './FoodCard'
import classes from "./Home.module.css"
import Data from "../Data"


const Home = () => {
    return (
        <div className={classes.container}>
            <div className={classes.foodContainer}>
                {Data.map((val) => {
                    return <FoodCard {...val} key={val.id} val={val} />
                })}
            </div>
        </div>
    )
}

export default Home