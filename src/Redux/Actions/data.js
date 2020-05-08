import { SET_WORLD, GET_COUNTRY, LINE_COUNTRY } from "./../Types"
import { setError, removeError } from "./../Actions/errors"
import { worldURL, courtryURL, countryLIne } from "./../../utils/ApiURL"
import axios from "axios"

export const getDataWorld = data => ({
    type: SET_WORLD,
    data
})

export const getDataCountry = data => ({
    type: GET_COUNTRY,
    data
})

export const setCountryLine = data => ({
    type: LINE_COUNTRY,
    data
})

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await axios.get(worldURL)
            console.log(res)
            dispatch(getDataWorld(res.data.results))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}

export const fetchCountry = code => {
    return async dispatch => {
        try {
            const res = await axios.get(courtryURL + `${code}`)
            console.log(res.data)
            dispatch(getDataCountry(res.data.countrydata))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}

export const fetchLineCountry = code => {
    return async dispatch => {
        try {
            const res = await axios.get(countryLIne + `${code}`)
            dispatch(setCountryLine(res.data.timelineitems))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}