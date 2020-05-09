import React from 'react'
import { useSelector } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { usePromiseTracker } from "react-promise-tracker";
import Card from '@material-ui/core/Card';


const CardDisplay = () => {

    const { promiseInProgress } = usePromiseTracker();
    const reducer = useSelector(state => state.dataReducer)
    const {
        world,
        worldBar,
        barData
    } = reducer

    return (
        <>
            {promiseInProgress
                ? <div className="cardDisplay"><CircularProgress color="secondary" className="prog" /></div>
                : <div className="cardDisplay">
                    <Card className="card green">
                        <h3>Total Cases</h3>
                        {world ? worldBar.total_cases : barData.total_cases}
                        <h3>Total New Cases</h3>
                        {world ? worldBar.total_new_cases_today : barData.total_new_cases_today}
                    </Card>
                    <Card className="card blue">
                        <h3>Total Recovered</h3>
                        {world ? worldBar.total_recovered : barData.total_recovered}
                        <h3>Total Serious Cases</h3>
                        {world ? worldBar.total_serious_cases : barData.total_serious_cases}
                    </Card>
                    <Card className="card red">
                        <h3>Total Deaths</h3>
                        {world ? worldBar.total_deaths : barData.total_deaths}
                        <h3>Total New Deaths</h3>
                        {world ? worldBar.total_new_deaths_today : barData.total_new_deaths_today}
                    </Card>
                </div>
            }
        </>
    )
}

export default CardDisplay
