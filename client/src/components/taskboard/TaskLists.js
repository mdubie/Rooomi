import React from 'react';
import { TaskListEntry } from './TaskListEntry';

export const TaskLists = ({tasks, completeTask}) => {
	return (
		<div>
		<div>
      {tasks.map((entry) => <TaskListEntry tasks={entry} completeTask={completeTask}/>)}
		</div>
		<div>
			{tasks.map((entry) => <TaskListEntry tasks={entry} completeTask={completeTask}/>)}
		</div>
		</div>
	)
}