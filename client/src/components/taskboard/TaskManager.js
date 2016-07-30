import React from 'react';
import { TaskBoard } from './TaskBoard';
import { CompletedFeed } from './CompletedFeed';
import TaskForm from './TaskForm';

export const TaskManager = ({roommates, username, house, socket, tasks}) => (
  <div>
    <TaskForm roommates={roommates} username={username} house={house} socket={socket} />
    <TaskBoard username={username} tasks={tasks.filter(task => !task.isCompleted)} house={house} socket={socket} />
    <CompletedFeed tasks={tasks.filter(task => task.isCompleted)} />
  </div>
);


