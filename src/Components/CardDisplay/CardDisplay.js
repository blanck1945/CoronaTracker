import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"
import { fetchData } from "./../../Redux/Actions/data"
import Card from '@material-ui/core/Card';

const CardDisplay = () => {

    const { promiseInProgress } = usePromiseTracker()
    const active = useSelector(state => state.dataReducer)
    const dispatch = useDispatch({ fetchData })

    console.log(active[0])

    const handlerClick = async () => {
        trackPromise(dispatch(fetchData()))
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
                        <Card className="card green">{active[0] && active[0].total_cases}</Card>
                        <Card className="card blue">{active[0] && active[0].total_recovered}</Card>
                        <Card className="card red">{active[0] && active[0].total_deaths}</Card> </>}
            </div>
            <button onClick={handlerClick}>Press</button>
        </>
    )
}

export default CardDisplay
