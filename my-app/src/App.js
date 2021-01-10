import React, { Component } from 'react'
import './scss/index.scss'
import MusicList from './component/MusicList'

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <h1>Reactjs</h1>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>increment</button>

        {/* <button onClick={() => this.increment(1)}>increment1</button>
        <button onClick={() => this.increment(2)}>increment2</button> */}

        <MusicList></MusicList>
      </>
    )
  }
}

export default App;
