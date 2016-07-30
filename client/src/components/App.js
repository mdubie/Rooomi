import React from 'react';
import $ from 'jquery';
import { TaskBoard } from './taskboard/TaskBoard';
import TaskForm from './taskBoard/TaskForm';
import { PageNav } from './taskboard/Nav';
import { CompletedFeed } from './taskboard/CompletedFeed';
import Messenger from './messenger/Messenger.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      house: '',
      tasks: [],
      roommates: [],
    };
  }

  componentWillMount() {
    const socket = this.props.socket;

    const self = this;
    $.ajax({
      method: 'GET',
      url: '/getCurrentUser',
    }).done((data) => {
      self.setState({
        house: data.house,
        username: data.username,
      });
      socket.emit('getAllUsers', this.state.house);
      socket.emit('getAllTasks', this.state.house);
    });

    socket.on('allUsers', (allUsers) => {
      this.setState({
        roommates: allUsers,
      });
    });

    socket.on('allTasks', (allTasks) => {
      this.setState({
        tasks: allTasks,
      });
    });

    socket.on('addTask', (taskObj) => {
      const newTasks = this.state.tasks.concat(taskObj);
      this.setState({
        tasks: newTasks,
      });
    });

    socket.on('completeTask', (taskObj) => {
      if (taskObj) {
        const newTasks = this.state.tasks.slice();
        const taskIds = newTasks.slice().map(task => task._id);
        const index = taskIds.indexOf(taskObj._id);
        newTasks[index] = taskObj;
        this.setState({
          tasks: newTasks,
        });
      }
    });
  }

  render() {
    let appStyle = {
      width: '100%',
      height: '100%',
      border: '1px solid #666',
    };

    return (
      <div style={appStyle}>
        <PageNav roommates={this.state.roommates} username={this.state.username} house={this.state.house} />
        <TaskForm roommates={this.state.roommates} username={this.state.username} house={this.state.house} socket={this.props.socket} />
        <TaskBoard username={this.state.username} tasks={this.state.tasks} house={this.state.house} socket={this.props.socket} />
        <CompletedFeed tasks={this.state.tasks} />
        <Messenger username={this.state.username} house={this.state.house} socket={this.props.socket} />
      </div>
    );
  }
}
