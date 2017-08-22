import React, { Component } from 'react';
import './App.css';

import InputBox from './InputBox';
import MessageBox from './MessageBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        // {author: 'Anand', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio deleniti sit, beatae '},
        // {author: 'Bob', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio '},
        // {author: 'Max', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio , beatae '},
        // {author: 'Furiosa', body: 'Lorem ipsum dolor sit  deleniti sit, beatae '},
      ]
    }
  }
  
  addMessage(message) {
    let updatedMsgs = this.state.messages
    updatedMsgs.push(message)
    this.setState({messages: updatedMsgs})
  }
  
  render() {
    return (
      <div className="app">
        <MessageBox messages={this.state.messages} />
        <InputBox addMessage={(newMessage)=>this.addMessage(newMessage)}/>
      </div>
    );
  }
}

export default App;
