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
      <div style={{display: 'inline-block'}}>
        <h4>{`${task.assignee}'s task`}</h4>
        <p>{task.description}</p>
        <p style={{fontStyle: 'italic'}}>{`assigned by ${task.assignor} due ${moment(task.dueAt).fromNow()}`}</p>
      </div>
      <div style={{display: 'inline-block', float: 'right'}}>
        {render}
      </div>
    </ListGroupItem>
  );
};
