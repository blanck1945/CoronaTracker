import { LOAD_OPEN, LOAD_CLOSE } from "./../Types"

export const loadOn = () => ({
    type: LOAD_OPEN
})

export const loadOff = () => ({
    type: LOAD_CLOSE
})