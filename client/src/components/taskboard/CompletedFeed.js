import React from 'react';
import CompletedFeedEntry from './CompletedFeedEntry';

export const CompletedFeed = ({ tasks }) => {
  let style = {
    width: '100%',
    float: 'left',
  };
  return (
    <div style={style}>
      {tasks
        .filter(task => task.isCompleted)
        .map((task) => <CompletedFeedEntry key={task._id} task={task} />)}
    </div>
  );
};
