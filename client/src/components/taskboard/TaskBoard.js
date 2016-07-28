import React from 'react';
import { TaskLists } from './TaskLists';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
// import TaskForm from './TaskForm';
// import NewTaskEntry from './NewTaskEntry';



export const TaskBoard = ({ messages }) => {
	return (
		<Jumbotron>
	    <TaskLists messages={messages}>Roommate</TaskLists>
	    <TaskLists messages={messages}>User</TaskLists>
    </Jumbotron>
	);
}

    	// <Header />

