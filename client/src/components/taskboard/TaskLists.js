import React from 'react';
import { TaskListEntry } from './TaskListEntry';
import { Panel, ListGroup } from 'react-bootstrap';


export const TaskLists = ({ isUser, house, username, tasks, socket }) => {
  const header = isUser
    ? `${username}'s tasks`
    : `${house}'s tasks`

  return (
  <div>
    <Panel collapsible defaultExpanded header={ header }>
      <ListGroup fill>
        {tasks.map((task) => <TaskListEntry key={task._id} username={username} task={task} socket={socket} />)}
      </ListGroup>
    </Panel>
  </div>
)};
