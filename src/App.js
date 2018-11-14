import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import SliderBox from './SliderBox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SliderBox />
      </div>
    )
  }
}

export default App
