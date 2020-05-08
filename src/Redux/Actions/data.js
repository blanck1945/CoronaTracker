import { SET_WORLD, SET_USA } from "./../Types"
import axios from "axios"

export const getDataWorld = data => ({
    type: SET_WORLD,
    data
})

export const getDataUsa = data => ({
    type: SET_USA,
    data
})

const worldURL = "https://api.thevirustracker.com/free-api?global=stats"

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await axios.get(worldURL)
            dispatch(getDataWorld(res.data.results))
            ///remove errors
        }
        catch (err) {
            const error = err.response
            //dispath errors
        }
    }
}