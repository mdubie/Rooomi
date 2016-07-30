import React from 'react';
import CompletedFeedEntry from './CompletedFeedEntry';
import { Panel, ListGroup } from 'react-bootstrap';

export const CompletedFeed = ({ tasks }) => {
  return (
    <Panel bsStyle="info" collapsible defaultExpanded header="Completed Feed">
      <ListGroup fill>
        {tasks.map((task) => <CompletedFeedEntry key={task._id} task={task} />)}
      </ListGroup>
    </Panel>
  );
};