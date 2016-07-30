import React from 'react';
import MessageEntryForm from './MessageEntryForm.js';
import { MessageList } from './MessageList.js';

export default class Messenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [
        { username: 'matt', house: 'hr', message: 'yo', time: 'today' },
        { username: 'steven', house: 'hr', message: 'hey', time: 'tmr' },
        { username: 'roy', house: 'hr', message: 'dude', time: 'yesterday' },
      ],
    };
  }

  componentWillMount() {
    const socket = this.props.socket;

    socket.emit('getAllMessages', this.props.house);

    socket.on('getAllMessages', (allMessages) => {
      this.setState({
        messages: allMessages,
      });
    });

    socket.on('addMessage', (newMessage) => {
      const newMessages = this.state.messages;
      newMessages.push(newMessage);
      this.setState({
        messages: newMessages,
      });
    });
  }

  render() {
    return (
      <div>
        <MessageEntryForm username={this.props.username} house={this.props.house} socket={this.props.socket}/>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}
