import React from 'react';

export const TaskListEntry = ({messages}) => {
	return <div>{messages.description} - {messages.name}</div>;
}