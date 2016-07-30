import React from 'react';
import { MessageEntry } from './MessageEntry.js';
import { Panel, ListGroup } from 'react-bootstrap';

export const MessageList = ({ messages }) => (
  <div>
    <Panel collapsible defaultExpanded header="Messages">
      <ListGroup fill>
        {messages.slice(0,30).map((message) => <MessageEntry key={message._id} message={message} />)}
      </ListGroup>
    </Panel>
  </div>
);
