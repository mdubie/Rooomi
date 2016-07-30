import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const CompletedFeedEntry = ({ task }) => (
  <ListGroupItem >
    {task.description} - Assignor: {task.assignor} - Assignee: {task.assignee}
  </ListGroupItem>
);

export default CompletedFeedEntry;
