import React from 'react'
import { useSelector } from 'react-redux'



const CardDisplay = () => {

    const active = useSelector(state => state)
    console.log(active)
    return (
        <div className="cardDisplay">

        </div>
    )
}

export default CardDisplay
