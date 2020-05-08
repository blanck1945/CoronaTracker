import React, { useState } from 'react'
import { Bar, Line } from "react-chartjs-2"
import { useSelector, useDispatch } from 'react-redux'
import { setBar, setLine } from "./../../Redux/Actions/chart"
import { fetchUsaLine } from "./../../Redux/Actions/data"
import { trackPromise } from 'react-promise-tracker'
import { usePromiseTracker } from "react-promise-tracker"

const Chart = () => {

    const { promiseInProgress } = usePromiseTracker()

    const [cases, setCases] = useState([])

    const select = useSelector(state => state.select)
    const active = useSelector(state => state.dataReducer.barData)

    const total = useSelector(state => state)
    console.log(total)
    const lineActive = useSelector(state => state.dataReducer.lineData[0])
    console.log(lineActive)
    const dispatch = useDispatch({ setBar, setLine, fetchUsaLine })

    const data = {
        datasets: [
            {
                backgroundColor: "rgb(18, 146, 18)",
                data: active[0] && [active[0].total_cases],
                label: "Total Cases"
            },
            {
                label: "Total Recovered",
                backgroundColor: "rgb(20, 20, 116)",
                data: active[0] && [active[0].total_recovered],
            },
            {
                label: "Total Deaths",
                backgroundColor: "rgb(131, 13, 13",
                data: active[0] && [active[0].total_deaths],
            },
        ], options: {
            responsive: true,
            title: {
                display: true,
                text: "Corona Virus"
            }
        }
    }

    const labels = lineActive && Object.keys(lineActive)
    const values = lineActive && Object.values(lineActive)
    const createLineTable = () => {
        setCases(values.map(el => cases.push(el.total_cases)))
    }

    const line = {
        lineChart: {
            labels: `${labels}`,
            datasets: [
                {
                    label: [
                        "TimeLine USA"
                    ],
                    data: cases,
                    backgroundColor: [
                        "royalblue",
                    ]
                }
            ]
        }
    }
    /*
    const line = {
        labels: lineActive && Object.keys(lineActive[0]),
        datasets: [
            {
                backgroundColor: "rgb(18, 146, 18)",
                data: lineActive && console.log(Object.values(lineActive[0].map())),
                label: "Total Cases"
            },
            {
                label: "Total Recovered",
                backgroundColor: "rgb(20, 20, 116)",
                data: [1320]
            },
            {
                label: "Total Deaths",
                backgroundColor: "rgb(131, 13, 13",
                data: [300]
            },
        ], options: {
            responsive: true,
            title: {
                display: true,
                text: "Corona Virus"
            }
        }
    }*/

    const handlerClick = () => {
        if (select.bar === true) {
            dispatch(setLine())
            trackPromise(dispatch(fetchUsaLine()))
            createLineTable()
        }
        else {
            dispatch(setBar())
        }
    }

    return (
        <div className="chart" >
            <div className="btnBox">
                {select.bar ? <button className="searchBtn select">BAR</button> : <button onClick={handlerClick}
                    className="searchBtn">BAR</button>}
                {select.bar ? <button onClick={handlerClick} className="searchBtn">LINE</button>
                    : <button onClick={handlerClick}
                        className="searchBtn select">LINE</button>}
            </div>
            {select.bar ? <Bar data={data} height={120} /> : null
            }
            {select.line ? <Line line={line} height={120} /> : null}
        </div >
    )
}

export default Chart
