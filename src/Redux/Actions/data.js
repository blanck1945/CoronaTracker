import { SET_WORLD, SET_USA } from "./../Types"
import { axiosGetData } from "./../../Api/axios"

export const getDataWorld = data => ({
    type: SET_WORLD,
    data
})

export const getDataUsa = data => ({
    type: SET_USA,
    data
})

export const fetchData = () => {
    return async dispatch => {
        try {
            const res = await axiosGetData()
            dispatch(res.data)
            ///remove errors
        }
        catch (err) {
            const error = err.response
            //dispath errors
        }
    }
}