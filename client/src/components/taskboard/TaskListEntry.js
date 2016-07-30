import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


export const TaskListEntry = ({ username, task, socket }) => {
  return (
    <ListGroupItem
      onClick={() => { if (username === task.assignee) { socket.emit('completeTask', task); } }}
    >
      {task.description} - Assignor: {task.assignor} - Assignee: {task.assignee}
    </ListGroupItem>
  );
};
