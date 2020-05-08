import React from 'react';
import { Provider } from "react-redux"

//Components imports
import NavBaar from './Components/Navbar/NavBaar';
import CardDisplay from './Components/CardDisplay/CardDisplay';
import Chart from './Components/Chart/Chart';

//Css imports
import './App.css';
import "./Css/NavBar.css"
import "./Css/cardDisplay.css"
import "./Css/Chart.css"

//Redux imports
import { store } from "./Redux/Store"

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <NavBaar />
        <CardDisplay />
        <Chart />
      </div>
    </Provider>
  )
}

export default App

