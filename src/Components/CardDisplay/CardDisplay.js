import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"
import { fetchData, fetchUsa } from "./../../Redux/Actions/data"
import Card from '@material-ui/core/Card';

const CardDisplay = () => {

    const { promiseInProgress } = usePromiseTracker()
    const active = useSelector(state => state.dataReducer.barData)
    const dispatch = useDispatch({ fetchData, fetchUsa })

    useEffect(() => {
        trackPromise(dispatch(fetchData()))
    }, [])

    const handlerClick = () => {
        trackPromise(dispatch(fetchData()))
    }

    const handlerClickUsa = () => {
        trackPromise(dispatch(fetchUsa()))
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
            <button onClick={handlerClick}>Press</button>
            <button onClick={handlerClickUsa}>Usa</button>
        </>
    )
}

export default CardDisplay
