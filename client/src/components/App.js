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

  componentDidMount() {
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
      socket.emit('getAllMessages', this.state.house);
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
      <div className="appBody">
        <PageNav roommates={this.state.roommates} username={this.state.username} house={this.state.house} />
        <Tabs style={{height: '50%'}} animation={false} id="uncontrolled-tab-example">
          <Tab eventKey={1} title="Task Manager">
            <TaskManager tasks={this.state.tasks} roommates={this.state.roommates} username={this.state.username} house={this.state.house} socket={this.props.socket} />
          </Tab>
          <Tab eventKey={2} title="Messenger">
            <Messenger username={this.state.username} house={this.state.house} socket={this.props.socket} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

