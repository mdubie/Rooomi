import React from 'react';
import { TaskLists } from './TaskLists';

export const TaskBoard = ({ house, username, tasks, socket }) => {
  return (
    <div>
      <div>
        <TaskLists isUser={true} house={house} username={username} tasks={tasks.filter(task => task.assignee === username)} socket={socket}>User</TaskLists>
      </div>
      <div>
        <TaskLists isUser={false} house={house} username={username} tasks={tasks.filter(task => task.assignee !== username)} socket={socket}>Roommate</TaskLists>
      </div>
    </div>
  );
};


