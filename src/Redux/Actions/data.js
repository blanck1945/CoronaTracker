import { SET_WORLD, SET_USA, LINE_USA } from "./../Types"
import { setError, removeError } from "./../Actions/errors"
import axios from "axios"

export const getDataWorld = data => ({
    type: SET_WORLD,
    data
})

export const getDataUsa = data => ({
    type: SET_USA,
    data
})

export const setUsaLine = data => ({
    type: LINE_USA,
    data
})

const worldURL = "https://api.thevirustracker.com/free-api?global=stats"

const usaURL = "https://api.thevirustracker.com/free-api?countryTotal=US"
const usaLineURL = "https://api.thevirustracker.com/free-api?countryTimeline=US"

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await axios.get(worldURL)
            dispatch(getDataWorld(res.data.results))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}

export const fetchUsa = () => {
    return async dispatch => {
        try {
            const res = await axios.get(usaURL)
            dispatch(getDataUsa(res.data))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}

export const fetchUsaLine = () => {
    return async dispatch => {
        try {
            const res = await axios.get(usaLineURL)
            dispatch(setUsaLine(res.data.timelineitems))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}