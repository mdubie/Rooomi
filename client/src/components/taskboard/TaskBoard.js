import React from 'react';
import { TaskLists } from './TaskLists';

export const TaskBoard = ({ username, tasks, socket }) => {
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
        <TaskLists username={username} tasks={tasks.filter(task => task.assignee === username)} socket={socket}>User</TaskLists>
      </div>
      <div style={styleEntryRight}>
        <TaskLists username={username} tasks={tasks.filter(task => task.assignee !== username)} socket={socket}>Roommate</TaskLists>
      </div>
    </div>
  );
};


