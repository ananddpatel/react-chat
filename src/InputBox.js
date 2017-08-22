import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  render () {
    return(
      <form className="input-box">
        <input className="author" type="text" required ref="author" />
        <input className="message-body" type="text" required ref="message" />
        <button onClick={(e) => this.sendMessage(e)}>send</button>
      </form>
    );
  }

  sendMessage(e) {
    let message = {author: this.refs.author.value, body: this.refs.message.value}
    this.props.addMessage(message)
    this.refs.message.value = ""
    e.preventDefault()
  }
}

export default InputBox;