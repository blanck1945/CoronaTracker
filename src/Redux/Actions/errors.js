import { SET_ERROR, REMOVE_ERROR } from "./../Types"

export const setError = () => ({
    type: SET_ERROR
})

export const removeError = () => ({
    type: REMOVE_ERROR
})