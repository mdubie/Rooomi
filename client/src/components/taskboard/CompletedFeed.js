import React from 'react';
import CompletedFeedEntry from './CompletedFeedEntry';
import { Panel, ListGroup } from 'react-bootstrap';

export const CompletedFeed = ({ tasks }) => {
  return (
    <Panel collapsible defaultExpanded header="Completed Feed">
      <ListGroup fill>
        {tasks
          .filter(task => task.isCompleted)
          .map((task) => <CompletedFeedEntry key={task._id} task={task} />)}
      </ListGroup>
    </Panel>
  );
};