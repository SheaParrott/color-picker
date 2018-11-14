import React, { Component } from 'react'

class SliderBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hue: Math.ceil(Math.random() * 360),
      Saturation: Math.ceil(Math.random() * 100),
      Light: Math.ceil(Math.random() * 100),
      Opacity: 1
    }
  }

  changeHueValue = event => {
    this.setState({
      hue: event.target.value
    })
  }
  changeSaturationValue = event => {
    this.setState({
      Saturation: event.target.value
    })
  }
  changeLightValue = event => {
    this.setState({
      Light: event.target.value
    })
  }
  changeOpacityValue = event => {
    this.setState({
      Opacity: event.target.value
    })
  }

  render() {
    return (
      <div>
        <main>
          <div className="ColorBoxImage">
            <div
              className="colorBox"
              style={{
                backgroundColor: `hsla(${this.state.hue},${
                  this.state.Saturation
                }%,${this.state.Light}%,${this.state.Opacity})`
              }}
            />
          </div>
          <div className="sliderBox">
            <section>
              <p>HUE:{this.state.hue}</p>
              <input
                type="range"
                min="0"
                max="360"
                value={this.state.hue}
                onChange={this.changeHueValue}
              />
            </section>
            <section>
              <p>SATURATION:{this.state.Saturation}</p>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.Saturation}
                onChange={this.changeSaturationValue}
              />
            </section>
            <section>
              <p>LIGHT:{this.state.Light}</p>
              <input
                type="range"
                min="0"
                max="100"
                value={this.state.Light}
                onChange={this.changeLightValue}
              />
            </section>
            <section>
              <p>OPACITY:{this.state.Opacity}</p>
              <input
                type="range"
                min="0"
                max="1"
                step=".1"
                value={this.state.Opacity}
                onChange={this.changeOpacityValue}
              />
            </section>
          </div>
        </main>
      </div>
    )
  }
}

export default SliderBox
