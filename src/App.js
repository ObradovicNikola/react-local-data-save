import './App.css';
import React, { Component } from 'react'


class App extends Component {
  constructor() {
    super()

    this.state = {
      localCount: 0,
      sessionCount: 0
    }
  }

  componentDidMount() {
    const stringLocalCount = localStorage.getItem('localCount')
    const stringSessionCount = sessionStorage.getItem('sessionCount')
    const localCount = parseInt(stringLocalCount)
    const sessionCount = parseInt(stringSessionCount)

    if (!isNaN(localCount)) {
      this.setState({ localCount })
    }

    if (!isNaN(sessionCount)) {
      this.setState({ sessionCount })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.localCount !== this.state.localCount) {
      localStorage.setItem('localCount', this.state.localCount)
    }
    if (prevState.sessionCount !== this.state.sessionCount) {
      sessionStorage.setItem('sessionCount', this.state.sessionCount)
    }
  }

  localCountIncrease = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount + 1
      }
    })
  }

  localCountDecrease = () => {
    this.setState((prevState) => {
      return {
        localCount: prevState.localCount - 1
      }
    })
  }

  localCountReset = () => {
    this.setState({
      localCount: 0
    })
  }

  sessionCountIncrease = () => {
    this.setState((prevState) => {
      return {
        sessionCount: prevState.sessionCount + 1
      }
    })
  }

  sessionCountDecrease = () => {
    this.setState((prevState) => {
      return {
        sessionCount: prevState.sessionCount - 1
      }
    })
  }

  sessionCountReset = () => {
    this.setState({
      sessionCount: 0
    })
  }
  render() {
    return (
      <div className="App" >
        <div className="local storage">
          <h1>Local storage:</h1>
          <p>Counter: {this.state.localCount}</p>
          <button onClick={this.localCountDecrease}>-</button>
          <button onClick={this.localCountReset}>reset</button>
          <button onClick={this.localCountIncrease}>+</button>
        </div>
        <div className="session storage">
          <h1>Session storage:</h1>
          <p>Counter: {this.state.sessionCount}</p>
          <button onClick={this.sessionCountDecrease}>-</button>
          <button onClick={this.sessionCountReset}>reset</button>
          <button onClick={this.sessionCountIncrease}>+</button>
        </div>
      </div>
    );
  }
}

export default App;
