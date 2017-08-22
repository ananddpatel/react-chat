import React, { Component } from 'react'
import './MessageBox.css'

import Message from './Message'

class MessageBox extends Component {
  renderMessages() {
    let messages = this.props.messages
    return messages.map(message => <Message author={message.author} body={message.body} />)
  }

  render() {
    return (
      <div className="message-box">
        {this.renderMessages()}
      </div>
    )
  }
}

export default MessageBox;