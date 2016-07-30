import React from 'react';
import { TaskListEntry } from './TaskListEntry';

export const TaskLists = ({ tasks }) =>
  <div>
    <div>
      {tasks.map((task) => <TaskListEntry task={task} />)}
    </div>
  </div>;
