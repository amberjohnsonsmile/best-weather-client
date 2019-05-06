import React, {Component} from 'react'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const config = require('./config')

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      weather: []
    }
  }

  componentDidMount() {
    fetch(config.url + '/weather')
      .then(response => response.json())
      .then(weather => {
        this.setState({
          isLoading: false,
          weather
        })
        console.log(this.state.weather)
      })
      .catch(console.error)
  }

  createWeather(weather) {
    return (
      <ul>
        <li>High: {weather.high}°</li>
        <li>Low: {weather.low}°</li>
        <li>{weather.type}</li>
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar className="nav">
            <Typography variant="title" color="inherit">
              BestWeather
            </Typography>
            <div>
              <Button color="inherit" className="nav-link">
                View the Code
              </Button>
              <Button color="inherit" className="nav-link">
                About the Developer
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <div>
          <h1>The best weather for this week is:</h1>
          {this.createWeather(this.state.weather)}
        </div>
      </div>
    )
  }
}

export default App
