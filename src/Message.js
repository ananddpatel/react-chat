import React, { Component } from 'react'
import './Message.css'

class Message extends Component {
  render() {
    return (
      <div className="message">
        <p className="author">{this.props.author}</p>
        <p className="body">{this.props.body}</p>
      </div>
    )
  }
}

export default Message;