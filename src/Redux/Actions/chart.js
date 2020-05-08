import { BAR_CHART, LINE_CHART, WORLD_BAR } from "./../Types"

export const setWorldBar = () => ({
    type: WORLD_BAR
})

export const setBar = () => ({
    type: BAR_CHART
})

export const setLine = () => ({
    type: LINE_CHART
})