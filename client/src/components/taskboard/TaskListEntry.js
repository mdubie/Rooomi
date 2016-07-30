import React from 'react';
import Paper from 'material-ui/Paper';


// let style = {
//   height: 50,
//   width: 50,
//   margin: 10,
//   textAlign: 'center',
//   display: 'inline-block',
//   overflow: 'hidden',
// };

export const TaskListEntry = ({ tasks, completeTask }) => {
  let style = {
    height: 100,
    width: 100,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden',
  };

  return (
    <div>
      <Paper
        style={style}
        zDepth={3}
        circle={true}
        onTouchTap={() => completeTask(tasks)}   
      >
        <div className="innerTaskText">
          {tasks.description} - Assignor: {tasks.assignor} - Assignee: {tasks.assignee}
        </div>
      </Paper>
    </div>
  );
};
