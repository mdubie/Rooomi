import React from 'react';
import { TaskLists } from './TaskLists';

export const TaskBoard = ({ username, tasks, completeTask }) => {
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
        <TaskLists tasks={tasks.filter(task => task.assignee === username)} completeTask={completeTask}>User</TaskLists>
      </div>
      <div style={styleEntryRight}>
        <TaskLists tasks={tasks.filter(task => task.assignee !== username)}>Roommate</TaskLists>
      </div>
      <div>
      </div>
    </div>
  );
};


