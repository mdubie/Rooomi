import React from 'react';
import CompletedFeedEntry from './CompletedFeedEntry';

export const CompletedFeed = ({tasks}) => {
	let style = {
  	width: '100%',
  	float: 'left',
  };
	return (
		<div style={style}>
		  {tasks.map((task) => <CompletedFeedEntry task={task} />)}
		</div>
	);
};

//{this.props.tasks.map((task) => <CompletedFeedEntry task={task} />)}