import { SET_WORLD, GET_COUNTRY, LINE_COUNTRY } from "./../Types"
import { setError, removeError } from "./../Actions/errors"
import { loadOn, loadOff } from "./loading"
import { worldURL, courtryURL, countryLIne } from "./../../utils/ApiURL"
import axios from "axios"

export const getDataWorld = data => ({
    type: SET_WORLD,
    data
})

export const getDataCountry = (data) => ({
    type: GET_COUNTRY,
    data,
})

export const setCountryLine = (data) => ({
    type: LINE_COUNTRY,
    data,
})

export const fetchData = () => {
    return async dispatch => {
        try {
            dispatch(loadOn())
            const res = await axios.get(worldURL)
            dispatch(getDataWorld(res.data.results[0]))
            dispatch(removeError())
            dispatch(loadOff())
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
            dispatch(loadOn())
            const res = await axios.get(courtryURL + `${code}`)
            dispatch(getDataCountry(res.data.countrydata[0]))
            dispatch(removeError())
            dispatch(loadOff())
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
            dispatch(loadOn())
            const res = await axios.get(countryLIne + `${code}`)
            dispatch(setCountryLine(res.data.timelineitems))
            dispatch(removeError())
            dispatch(loadOff())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}