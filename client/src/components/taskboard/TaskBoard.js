import React from 'react';
import { TaskLists } from './TaskLists';
import { TaskForm } from './TaskForm';
// import NewTaskEntry from './NewTaskEntry';

export const TaskBoard = ({ messages }) => {
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
        <TaskLists messages={messages}>Roommate</TaskLists>
      </div>
      <div style={styleEntryRight}>
        <TaskLists messages={messages}>User</TaskLists>
      </div>
      <TaskForm />
    </div>
  );
};


