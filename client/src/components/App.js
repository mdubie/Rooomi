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
      username: 'Steven',
      tasks: [
        { description: 'Trash', name: 'Roy' },
        { description: 'Dishes', name: 'Steven' },
        { description: 'Clean Room', name: 'Steven' },
        { description: 'Laundry', name: 'Steven' },
      ],
      completedTasks: [
        { description: 'Eat', name: 'Roy' },
      ],
      house: 'QueriedHouse',
    };
    this.completeTask = this.completeTask.bind(this);
  }

  completeTask(e) {
   var task = this.state.completedTasks.slice();
   task.push({ description: 'Laundry', name: 'Steven' });
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
          <Nav />
          <TaskForm />
          <TaskBoard tasks={this.state.tasks} completeTask={this.completeTask}/>
          <CompletedFeed tasks={this.state.completedTasks}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
