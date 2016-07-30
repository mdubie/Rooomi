import React from 'react';
import { TaskLists } from './TaskLists';

export const TaskBoard = ({ house, username, tasks, socket }) => {
  let taskBoardStyle = {
    width: '80%',
    margin: 'auto auto',
  };

  let styleEntryLeft = {
    width: '40%',
    display: 'inline',
    float: 'left',
  };

  let styleEntryRight = {
    width: '40%',
    display: 'inline',
    float: 'right',
  };
  return (
    <div style={taskBoardStyle}>
      <div style={styleEntryLeft}>
        <TaskLists isUser={true} house={house} username={username} tasks={tasks.filter(task => task.assignee === username)} socket={socket}>User</TaskLists>
      </div>
      <div style={styleEntryRight}>
        <TaskLists isUser={false} house={house} username={username} tasks={tasks.filter(task => task.assignee !== username)} socket={socket}>Roommate</TaskLists>
      </div>
    </div>
  );
};


