// Write your code here

import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)

    this.setState({randomNumber: newRandomNumber})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div>
        <div className="bg">
          <h1 className="heading">Random Number</h1>
          <p>"Generate a random number in the range of 0 to 100</p>

          <button
            type="button"
            className="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="random">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
