import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


export const MessageEntry = ({ message }) => (
  <ListGroupItem>
    {`${message.username} says ${message.message} at ${message.time}!`}
  </ListGroupItem>
);
