import React from 'react';
import { MessageEntry } from './MessageEntry.js';
import { Panel, ListGroup } from 'react-bootstrap';

export const MessageList = ({ messages }) => (
  <div>
    <Panel collapsible defaultExpanded header="Messages">
      <ListGroup fill>
        {messages.map((message) => <MessageEntry message={message} />)}
      </ListGroup>
    </Panel>
  </div>
);

//add key from db once we connect it
//key={message._id}