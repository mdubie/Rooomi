import React from 'react';
import { TaskListEntry } from './TaskListEntry';

export const TaskLists = ({ tasks, completeTask }) =>
  <div>
    <div>
      {tasks.map((entry) => <TaskListEntry key={entry._id} tasks={entry} completeTask={completeTask} />)}
    </div>
  </div>;
