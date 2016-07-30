import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import moment from 'moment';


export const TaskListEntry = ({ isUser, username, task, socket }) => {
  return (
    <ListGroupItem
      onClick={() => { if (isUser) { socket.emit('completeTask', task); } }}
    >
      <h4>{`${task.assignee}'s task`}</h4>
      <p>{task.description}</p>
      <p>{`assigned by ${task.assignor} and due ${moment(task.dueAt).fromNow()}`}</p>
    </ListGroupItem>
  );
};
