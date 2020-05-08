import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"
import { fetchData, fetchCountry, fetchLineCountry } from "./../../Redux/Actions/data"
import { setWorldBar, setBar } from "./../../Redux/Actions/chart"
import { getOptions } from "./../../Redux/Actions/options"
import Card from '@material-ui/core/Card';


const CardDisplay = () => {

    const { promiseInProgress } = usePromiseTracker()

    const active = useSelector(state => state.dataReducer.barData)
    const options = useSelector(state => state.options.options)
    const world = useSelector(state => state.dataReducer.world)
    const country = useSelector(state => state.dataReducer.country)
    const select = useSelector(state => state.select)
    console.log(active)
    const dispatch = useDispatch({ fetchData, getOptions, fetchCountry, fetchLineCountry, setWorldBar, setBar })

    useEffect(() => {
        trackPromise(dispatch(fetchData()))
        trackPromise(dispatch(getOptions()))
    }, [])

    const handlerClick = () => {
        dispatch(setBar())
        trackPromise(dispatch(fetchData()))
    }

    const handlerSearch = e => {
        const code = e.target.value
        trackPromise(dispatch(fetchCountry(code)))
        trackPromise(dispatch(fetchLineCountry(code)))
    }

    return (
        <>
            <div className="cardDisplay">
                {promiseInProgress ?
                    <div className="loading">
                        <CircularProgress color="secondary" />
                    </div>
                    :
                    <>
                        <Card className="card green">
                            <h3>Total Cases</h3>
                            {active[0] && active[0].total_cases}
                        </Card>
                        <Card className="card blue">
                            <h3>Total Recovered</h3>
                            {active[0] && active[0].total_recovered}
                        </Card>
                        <Card className="card red">
                            <h3>Total Deaths</h3>
                            {active[0] && active[0].total_deaths}</Card> </>}
            </div>
            <div className="searchBox">
                <button className={world ? "findBtn crim" : "findBtn"} onClick={handlerClick}>World</button>
                <select onChange={(e) => handlerSearch(e)}
                    name="countries" id=""
                    className={country ? "countries crim" : "countries"} >
                    {options !== null
                        ? options.map(el =>
                            <option value={el.alpha2Code} key={el.name}>{el.name}</option>)
                        : null}
                </select>
            </div>
        </>
    )
}

export default CardDisplay
