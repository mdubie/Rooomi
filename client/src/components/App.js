import React from 'react';
import { TaskBoard } from './taskboard/TaskBoard';
import { Nav } from './taskboard/Nav';
import { CompletedFeed } from './taskboard/CompletedFeed';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskForm from './taskBoard/TaskForm';

const socket = require('socket.io-client')(/* http://127.0.0.1:3000 */);

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'Steven',
      tasks: [],
      completedTasks: [
        { description: 'Eat', assignor: 'Roy' },
      ],
      house: 'QueriedHouse',
    };
    this.completeTask = this.completeTask.bind(this);
  }

  componentWillMount() {
    socket.emit('getAllTasks', this.state.house); 
    socket.on('allTasks', (allTasks) => {
      this.setState({
        tasks: allTasks,
      });
    });
  }

  completeTask(taskObj) {
    const task = this.state.completedTasks.slice();
    task.push({ description: 'Laundry', assignor: 'Steven' });
    this.setState({
      completedTasks: task,
    });
  }
  render() {
    return (
      <MuiThemeProvider className="container">
        <div>
          <div>
            <Nav username={this.state.username} />
            <TaskForm username={this.state.username} />
            <TaskBoard tasks={this.state.tasks} completeTask={this.completeTask} />
            <CompletedFeed tasks={this.state.completedTasks} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
