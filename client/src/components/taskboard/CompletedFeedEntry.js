import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const CompletedFeedEntry = ({ task }) => (
  <ListGroupItem >
    {`${task.assignee} completed ${task.description} given from ${task.assignor}`}
  </ListGroupItem>
);

export default CompletedFeedEntry;
