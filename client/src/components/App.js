import React from 'react';
import { TaskBoard } from './taskboard/TaskBoard';
import { Nav } from './taskboard/Nav';
import { CompletedFeed } from './taskboard/CompletedFeed';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskForm from './taskBoard/TaskForm';

var socket = require('socket.io-client')();

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'user1',
      tasks: [
        { description: 'Trash', assignor: 'Roy' },
        { description: 'Dishes', assignor: 'Steven' },
        { description: 'Clean Room', assignor: 'Steven' },
        { description: 'Laundry', assignor: 'Steven' },
      ],
      completedTasks: [
        { description: 'Eat', assignor: 'Roy' },
      ],
      house: 'QueriedHouse',
    };
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask(e) {
   var task = this.state.completedTasks.slice();
   task.push({ description: 'Laundry', assignor: 'Steven' });
   this.setState({
     completedTasks: task,
   });
  }

  componentWillMount() {
  	socket.emit('getAllHouseTasks', this.state.house);
  }

  componentDidMount() {
  	socket.on('sentAllHouseTasks', () => {

  	})
  }
  // WillMount
    // Socket to get tasks
    
  render() {
    return (
      <MuiThemeProvider className="container">
        <div>
          <div>
          <Nav />
          <TaskForm username={this.state.username}/>
          <TaskBoard tasks={this.state.tasks} completeTask={this.completeTask}/>
          <CompletedFeed tasks={this.state.completedTasks}/>
        </div>
        <div>
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
