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

export const TaskListEntry = ({tasks, completeTask}) => {
	let style = {
	  height: 50,
	  width: 50,
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
          onTouchTap={() => completeTask()}
        >
          <div className="innerTaskText">
            {tasks.description} - {tasks.assignor}
          </div>
        </Paper>
      </div>
    );
}