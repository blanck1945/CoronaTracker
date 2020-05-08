import { SET_OPTIONS } from "./../Types"
import { optionsURL } from "./../../utils/ApiURL"
import axios from "axios"
import { removeError, setError } from "./errors"

export const setOptions = data => ({
    type: SET_OPTIONS,
    data
})

export const getOptions = () => {
    return async dispatch => {
        try {

            const res = await axios.get(optionsURL)
            console.log(res.data)
            dispatch(setOptions(res.data))
            dispatch(removeError())
        }
        catch (err) {
            const error = err.response
            dispatch(setError(error))
        }
    }
}