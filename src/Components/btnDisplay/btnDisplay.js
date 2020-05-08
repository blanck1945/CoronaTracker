import React, { useEffect } from 'react'
import axios from "axios"

const btnDisplay = () => {



    return (
        <div className="searchBox">
            <button>World</button>
            <button>USA</button>
            <select name="countries" id="">
                <option value="Argetina">Argentina</option>
            </select>
        </div>
    )
}

export default btnDisplay
