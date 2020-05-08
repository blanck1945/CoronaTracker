import React from 'react'
import { Bar, Line } from "react-chartjs-2"
import { useSelector, useDispatch } from 'react-redux'
import { setBar, setLine } from "./../../Redux/Actions/chart"
import { usePromiseTracker } from "react-promise-tracker"
import CircularProgress from '@material-ui/core/CircularProgress';

const Chart = () => {

    const { promiseInProgress } = usePromiseTracker()

    const select = useSelector(state => state.select)
    console.log(select)
    const active = useSelector(state => state.dataReducer.barData)
    console.log(active)
    const lineActive = useSelector(state => state.dataReducer.lineData)
    const world = useSelector(state => state.dataReducer.world)

    const dispatch = useDispatch({ setBar, setLine })

    const data = {
        labels: ["Total Cases", "Total Recovered", "Total Deaths"],
        datasets: [
            {
                label: "Bar Chart",
                data: [
                    active[0] && active[0].total_cases,
                    active[0] && active[0].total_recovered,
                    active[0] && active[0].total_deaths,
                ],
                backgroundColor: [
                    "rgb(18, 146, 18)",
                    "rgb(20, 20, 116)",
                    "rgb(131, 13, 13)"
                ],
            },
        ],
        options: {
            responsive: true,
            title: {
                display: true,
                text: "Corona Virus Bar Chart"
            }
        }
    }

    const handlerClick = () => {
        if (select.bar === true && world === false) {
            dispatch(setLine())
        }
        else {
            dispatch(setBar())
        }
    }

    const cases = []
    lineActive && Object.values(lineActive[0]).map(el => cases.push(el.total_cases))
    const recovery = []
    lineActive && Object.values(lineActive[0]).map(el => recovery.push(el.new_daily_cases))
    const deaths = []
    lineActive && Object.values(lineActive[0]).map(el => deaths.push(el.total_deaths))
    const dates = []
    lineActive && Object.keys(lineActive[0]).map(el => dates.push(el))

    const line = {
        labels: dates,
        datasets: [
            {
                label: select.line ? active[0].info.title + " Total Cases" : "country",
                data: cases,
                borderColor: "rgb(18, 146, 18)",
                pointBorderColor: "none",
                pointBorderWidth: 0,
                fill: false
            },
            {
                label: select.line ? active[0].info.title + " Recovered Cases" : "country",
                data: recovery,
                borderColor: "rgb(20, 20, 116)",
                fill: false
            },
            {
                label: select.line ? active[0].info.title + " Death Cases" : "country",
                data: deaths,
                borderColor: "rgb(131, 13, 13",
                fill: false
            }
        ]
    }

    console.log(select.world)

    return (
        <div className="chart" >
            <div className="btnBox">
                {select.bar
                    ? <button className="searchBtn select">BAR</button>
                    : <button onClick={handlerClick} className="searchBtn">BAR</button>}
                {select.bar
                    ? <button onClick={handlerClick} className="searchBtn">LINE</button>
                    : <button className="searchBtn select">LINE</button>}
            </div>
            {select.world ? <Bar data={data} height={120} /> : null}
            {select.bar ? <Bar data={data} height={120} /> : null
            }
            {select.line
                ? promiseInProgress ? <CircularProgress /> : <Line data={line} height={120} />
                : null}
        </div >
    )
}

export default Chart
