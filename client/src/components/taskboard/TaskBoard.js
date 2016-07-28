import React from 'react';
import { TaskLists } from './TaskLists';
// import { NewTaskEntry } from './NewTaskEntry';



// Make this component Stateful
// Will pass down a roommmate name

export const TaskBoard = ({ tasks, completeTask }) => {
  let taskBoardStyle = {
  	width: '100%',
  };
  let styleEntryLeft = {
  	width: '50%',
  	block: 'inline',
  	float: 'left',
  };
  let styleEntryRight = {
  	width: '50%',
  	block: 'inline',
  	float: 'right',
  };
  return (
    <div style={taskBoardStyle}>
      <div style={styleEntryLeft}>
        <TaskLists tasks={tasks} completeTask={completeTask}>User</TaskLists>
      </div>
      <div style={styleEntryRight}>
        <TaskLists tasks={tasks}>Roommate</TaskLists>
      </div>
      <div>
      </div>
    </div>
  );
};


