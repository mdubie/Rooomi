import React from 'react';
import { TaskListEntry } from './TaskListEntry';

export const TaskLists = ({messages}) => {
	return (
		<div>
		<div>
      {messages.map((entry) => <TaskListEntry messages={entry}/>)}
		</div>
		<div>
			{messages.map((entry) => <TaskListEntry messages={entry}/>)}
		</div>
		</div>
	)
}