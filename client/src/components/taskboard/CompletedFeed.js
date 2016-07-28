import React from 'react';
import CompletedFeedEntry from './CompletedFeedEntry';

export const CompletedFeed = ({tasks}) => {
	return (
		<div>
		  {tasks.map((task) => <CompletedFeedEntry task={task} />)}
		</div>
	);
};

//{this.props.tasks.map((task) => <CompletedFeedEntry task={task} />)}