import React, {Component} from 'react'
import './App.css'

require('dotenv').config()
const port = process.env.PORT || 3000
const url = process.env.API_URL
console.log(url)

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
      .then(data => {
        this.setState({
          isLoading: false,
          blocks: data
        })
        console.log(this.state.blocks)
      })
      .catch(console.error)
  }

  render() {
    return (
      <div className="App">
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
