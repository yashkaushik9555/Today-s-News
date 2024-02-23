import React, { Component } from 'react'
import Loading from"./ZJFD.gif"
export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Loading} alt='error to load'/>
      </div>
    )
  }
}
export default spinner