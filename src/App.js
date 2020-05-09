import React from 'react';
import { Provider } from "react-redux"

//Components imports
import Base from './Components/Base';
import CardDisplay from './Components/CardDisplay/CardDisplay';
import Chart from "./Components/Chart/Chart"

//Css imports
import './App.css';
import "./Css/cardDisplay.css"
import "./Css/Base.css"
import "./Css/Chart.css"

//Redux imports
import { store } from "./Redux/Store"

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <CardDisplay />
        <Base />
        <Chart />
      </div>
    </Provider>
  )
}

export default App

