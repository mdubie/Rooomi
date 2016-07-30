import React from 'react';

export const TaskListEntry = ({ username, task, socket }) => {
  let style = {
    height: 100,
    width: 100,
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
    overflow: 'hidden',
  };

  return (
    <div
      style={style}
      onClick={() => { if (username === task.assignee) { socket.emit('completeTask', task); } }}
    >
      <div className="innerTaskText">
        {task.description} - Assignor: {task.assignor} - Assignee: {task.assignee}
      </div>
    </div>
  );
};
