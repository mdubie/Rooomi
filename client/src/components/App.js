import React from 'react';
import $ from 'jquery';
import { PageNav } from './taskboard/Nav';
import Messenger from './messenger/Messenger.js';
import { Tabs, Tab } from 'react-bootstrap';
import { TaskManager } from './taskboard/TaskManager.js';

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
      <div className="appBody">
        <PageNav roommates={this.state.roommates} username={this.state.username} house={this.state.house} />
        <Tabs animation={false} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Task Manager">
            <Messenger username={this.state.username} house={this.state.house} socket={this.props.socket} />
          </Tab>
          <Tab eventKey={2} title="Messenger">
            <TaskManager tasks={this.state.tasks} roommates={this.state.roommates} username={this.state.username} house={this.state.house} socket={this.props.socket} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

