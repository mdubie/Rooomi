import React from 'React';

export const TaskListEntry = ({messages}) => {
	return <div>{messages.description} - {messages.name}</div>;
}