import React from 'react';
import { TaskBoard } from './taskboard/TaskBoard';
import { Nav } from './taskboard/Nav';
import { CompletedFeed } from './taskboard/CompletedFeed';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskForm from './taskBoard/TaskForm';
import $ from 'jquery';


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
    return (
      <MuiThemeProvider className="container">
        <div>
          <div>
            <Nav username={this.state.username} />
            <TaskForm username={this.state.username} house={this.state.house} socket={this.props.socket} />
            <TaskBoard username={this.state.username} tasks={this.state.tasks} socket={this.props.socket} />
            <CompletedFeed tasks={this.state.tasks} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
