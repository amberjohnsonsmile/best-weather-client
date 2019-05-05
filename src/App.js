import React, {Component} from 'react'
import './App.css'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

require('dotenv').config()
const url = process.env.REACT_APP_API

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      weather: []
    }
  }

  componentDidMount() {
    fetch(url + '/weather')
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

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              BestWeather
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
