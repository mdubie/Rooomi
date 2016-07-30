import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


export const TaskListEntry = ({ isUser, username, task, socket }) => {
  return (
    <ListGroupItem
      onClick={() => { if (isUser) { socket.emit('completeTask', task); } }}
    >
      {task.description} - Assignor: {task.assignor} - Assignee: {task.assignee}
    </ListGroupItem>
  );
};
