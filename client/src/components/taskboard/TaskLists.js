import React from 'react';
import { TaskListEntry } from './TaskListEntry';

export const TaskLists = ({ username, tasks, socket }) => (
  <div>
    <div>
      {tasks.map((task) => <TaskListEntry key={task._id} username={username} task={task} socket={socket} />)}
    </div>
  </div>
);
