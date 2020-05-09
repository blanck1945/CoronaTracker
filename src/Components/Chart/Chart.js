import React from 'react'
import { Bar, Line } from "react-chartjs-2"
import { useSelector } from 'react-redux'
import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress';


const Chart = () => {

    const { promiseInProgress } = usePromiseTracker();
    const reducer = useSelector(state => state.dataReducer)
    const load = useSelector(state => state.loading.loading)
    const {
        barData,
        worldBar,
        lineData,
        world,
        bar,
        line
    } = reducer
    console.log(load)
    const data = {
        labels: ["Total Cases", "Total Recovered", "Total Deaths"],
        datasets: [
            {
                label: "WorldWide Stats",
                data: [
                    world ? worldBar.total_cases : barData.total_cases,
                    world ? worldBar.total_recovered : barData.total_recovered,
                    world ? worldBar.total_deaths : barData.total_deaths,
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

    const cases = []
    lineData && Object.values(lineData[0]).map(el => cases.push(el.total_cases))
    const recovery = []
    lineData && Object.values(lineData[0]).map(el => recovery.push(el.new_daily_cases))
    const deaths = []
    lineData && Object.values(lineData[0]).map(el => deaths.push(el.total_deaths))
    const dates = []
    lineData && Object.keys(lineData[0]).map(el => dates.push(el))

    const lineChart = {
        labels: dates,
        datasets: [
            {
                label: "Total Cases",
                data: cases,
                borderColor: "rgb(18, 146, 18)",
                pointBorderColor: "none",
                pointBorderWidth: 0,
                fill: false
            },
            {
                label: "Recovered Cases",
                data: recovery,
                borderColor: "rgb(20, 20, 116)",
                fill: false
            },
            {
                label: "Death Cases",
                data: deaths,
                borderColor: "rgb(131, 13, 13",
                fill: false
            }
        ]
    }

    return (
        <>
            {promiseInProgress
                ? <div className="porgBox"><CircularProgress color="secondary" className="prog" /></div>
                :
                <div className="chart">
                    {world && <Bar data={data} height={118} />}
                    {line && <Line data={lineChart} height={118} />}
                    {bar && <Bar data={data} height={118} />}
                </div>
            }
        </>
    )
}

export default Chart
