import React, { Component } from 'react';
import './InputBox.css';

class InputBox extends Component {
  render () {
    return(
      <form className="input-box">
        <input className="author" type="text" required ref="author" placeholder="Username"/>
        <input className="message-body" type="text" required ref="message" placeholder="Message..."/>
        <button onClick={(e) => this.sendMessage(e)}>Send</button>
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