import React from 'react';
import { ListGroupItem, Button } from 'react-bootstrap';
import moment from 'moment';


export const TaskListEntry = ({ isUser, username, task, socket }) => {
  const button = (
    <Button bsStyle="success" onClick={() => { if (isUser) { socket.emit('completeTask', task); } }}>
      Task completed
    </Button>
  );

  const render = isUser ? button : '';

  return (
    <ListGroupItem>
      <div>
        <h4>{`${task.assignee}'s task`}</h4>
        <p>{task.description}</p>
        <p>{`assigned by ${task.assignor} and due ${moment(task.dueAt).fromNow()}`}</p>
      </div>
      <div>
        {render}
      </div>
    </ListGroupItem>
  );
};
