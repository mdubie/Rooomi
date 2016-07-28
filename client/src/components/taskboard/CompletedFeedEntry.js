import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

let style = {
  padding: '6px',
};

const CompletedFeedEntry = ({ task }) => (
  <Card>
    <CardHeader
      title={task.description}
      subtitle={`Completed by ${task.assignor}`}
      avatar="http://lorempixel.com/100/100/nature/"
      style={style}
    />
  </Card>
);

export default CompletedFeedEntry;
