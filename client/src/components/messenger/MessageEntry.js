import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import moment from 'moment';



export const MessageEntry = ({ message }) => (
  <ListGroupItem>
    <div>
      <p style={{display: 'inline', fontWeight: 'bold'}}>{`${message.username}:  `}</p>
      <p style={{display: 'inline'}}>{message.message}</p>
      <p style={{display: 'inline', fontStyle: 'italic', float: 'right'}}>{moment(message.time).fromNow()}</p>
    </div>
  </ListGroupItem>
);