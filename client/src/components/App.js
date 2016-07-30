import React from 'react';
import { TaskBoard } from './taskboard/TaskBoard';
import { Nav } from './taskboard/Nav';
import { CompletedFeed } from './taskboard/CompletedFeed';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskForm from './taskBoard/TaskForm';
import $ from 'jquery';

import socket from './taskBoard/sockio';

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      house: '',
      tasks: [],
    };
  }

  componentWillMount() {
    const self = this;
    $.ajax({
      method: 'GET',
      url: '/getCurrentUser',
    }).done((data) => {
      self.setState({
        house: data.house,
        username: data.username,
      });
      socket.emit('getAllTasks', this.state.house);
      socket.emit('getAllUsers', this.state.house);
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
      this.setState({
        tasks: this.state.tasks.concat(taskObj),
      });
    });

    socket.on('completeTask', (taskObj) => {
      const returnedTask = taskObj;
      this.setState({
        tasks: this.state.tasks.map((task) => {
          if (task._id === returnedTask._id) {
            !task.isCompleted
          }
        })
      });
    });
  }

  render() {
    return (
      <MuiThemeProvider className="container">
        <div>
          <div>
            <Nav username={this.state.username} />
            <TaskForm username={this.state.username} house={this.state.house} />
            <TaskBoard username={this.state.username} tasks={this.state.tasks} />
            <CompletedFeed tasks={this.state.tasks} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
