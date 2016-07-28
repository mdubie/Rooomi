import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

let style = {
  padding: '6px',
};

const CompletedFeedEntry = ({task}) => (
  <Card>
    <CardHeader
      title={task.description}
      subtitle={`Completed by ${task.name}`}
      avatar="http://lorempixel.com/100/100/nature/"
      style={style}
    />
  </Card>
);

export default CompletedFeedEntry;