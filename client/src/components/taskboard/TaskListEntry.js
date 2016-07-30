import React from 'react';
import Paper from 'material-ui/Paper';
import socket from './sockio';


export const TaskListEntry = ({ task }) => {
  let style = {
    height: 100,
    width: 100,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden',
  };

  completeTask() {
    console.log('comp', task)
    socket.emit('completeTask', task)
  }

  return (
    <div>
      <Paper
        style={style}
        onClick={ this.completeTask }}
      >
        <div className="innerTaskText">
          {task.description} - Assignor: {task.assignor} - Assignee: {task.assignee}
        </div>
      </Paper>
    </div>
  );
};
