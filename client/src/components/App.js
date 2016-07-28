import React from 'react';
import { TaskBoard } from './taskboard/TaskBoard';
import { Nav } from './taskboard/Nav';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	username: 'Steven',
      messages: [
        { description: 'Trash', name: 'Roy' },
        { description: 'Dishes', name: 'Steven' },
        { description: 'Clean Room', name: 'Steven' },
        { description: 'Laundry', name: 'Steven' },
     	],
    };
  }
  render() {
    return (
      <MuiThemeProvider className="container">
        <div>
          <Nav />
          <TaskBoard messages={this.state.messages} />
        </div>
      </MuiThemeProvider>
    );
  }
}
