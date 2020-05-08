import axios from "axios"

const worldURL = "https://api.thevirustracker.com/free-api?global=stats"

export const axiosGetData = async () => {
    await axios.get(worldURL)
}