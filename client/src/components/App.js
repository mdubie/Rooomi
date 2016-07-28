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
      messages: [{ description: 'Working hello hello hello hello is it working is it working? Hello?', name: 'Roy' }, { description: 'Hello', name: 'Steven' }],
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
