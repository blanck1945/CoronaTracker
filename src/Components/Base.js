import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress';
import { trackPromise } from 'react-promise-tracker'
import { fetchData, fetchCountry, fetchLineCountry } from "./../Redux/Actions/data"
import { getOptions } from "./../Redux/Actions/options"

const Base = () => {


    const dispatch = useDispatch({ fetchData, getOptions, fetchCountry, fetchLineCountry })
    const reducer = useSelector(state => state.dataReducer)
    const options = useSelector(state => state.options.options)
    const [value, setValue] = useState("")

    const {
        world,
        bar,
        line
    } = reducer

    useEffect(() => {
        trackPromise(dispatch(getOptions()))
        trackPromise(dispatch(fetchData()))
    }, [])

    const handlerWorld = () => {
        trackPromise(dispatch(fetchData()))
    }

    const handlerSearch = e => {
        const code = e.target.value
        trackPromise(dispatch(fetchCountry(code)))
        setValue(code)

    }

    const handlerCode = e => {
        if (e.target.name === "bar") {
            trackPromise(dispatch(fetchCountry(value)))
        } else {
            trackPromise(dispatch(fetchLineCountry(value)))
        }

    }

    return (
        <div className="baseCSS">
            <div >
                <button className={world ? "findBtn crim" : "findBtn"} onClick={handlerWorld}>World</button>
                <select onChange={(e) => handlerSearch(e)}
                    name="countries" id=""
                    className={world ? "countries" : "countries crim"} >
                    {options !== null
                        ? options.map(el =>
                            <option value={el.alpha2Code}
                                key={el.name}>{el.name}</option>)
                        : null}
                </select>
            </div>
            <div>
                <button name="bar"
                    onClick={line ? (e) => handlerCode(e) : null}
                    className={line ? "searchBtn" : "searchBtn select"}>BAR</button>
                <button name="line"
                    onClick={bar ? (e) => handlerCode(e) : null}
                    className={line ? "searchBtn select" : "searchBtn"}>LINE</button>
            </div>
        </div >
    )
}

export default Base
