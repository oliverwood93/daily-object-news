import React, { Component } from 'react'

export default class Account extends Component {
  render() {
  const {user} = this.props
    return (
      <div>
        <h2>{user}</h2>
      </div>
    )
  }
}
