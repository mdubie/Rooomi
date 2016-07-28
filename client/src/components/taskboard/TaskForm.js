import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const socket = require('socket.io-client')();

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalNum: 0,
      intervalVal: 1,
      showModal: false,
      taskName: '',
      taskDueDate: '',
      taskInterval: 0,
      assignee: '',
      assignor: '',
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    this.handleSelectFieldChange = this.handleSelectFieldChange.bind(this);
    this.calcDueDateAndInterval = this.calcDueDateAndInterval.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({
      showModal: false,
    });
  }

  open() {
    this.setState({
      showModal: true,
    });
  }

  handleTextFieldChange(e) {
    const obj = {};
    obj[e.target.name] = e.target.value;
    this.setState(obj);
  }

  handleSelectFieldChange(e, i, v) {
    this.setState({
      intervalVal: v,
    });
  }

  calcDueDateAndInterval() {
    const hours = n => 1000 * 60 * 60 * n;
    const days = n => hours(n) * 24;
    const n = this.state.intervalNum;

    this.state.intervalVal === 1 ? this.state.taskInterval = hours(n) : days(n);
    this.state.taskDueDate = new Date(Date.now() + this.state.taskInterval);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.calcDueDateAndInterval();

    const taskName = this.state.taskName;
    const assignee = this.state.assignee;
    const assignor = this.props.username;
    const dueDate =  this.state.taskDueDate;
    const interval = this.state.taskInterval;

  // Break out of the handleSubmit if there is no taskname or duedate
    if (!taskName || !dueDate) {
      this.close();
      return;
    }
  // Emit the taskObj to the server created from the modal.
    socket.emit('addTask', {
      description: taskName,
      assignee,
      assignor,
      dueAt: dueDate,
      isCompleted: false,
    });
  // State will update and reset taskName and due date back to '';
    this.setState({
      taskName: '',
      taskDueDate: '',
    });
  // Close the modal once code is complete.
    this.close();
  }

  render() {
    return (
      <div onClick={this.open}>
        <img className="addTask" alt="addTask" src="http://bit.ly/29UZrXq" />
        <Modal bsSize="small" show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TextField
              name="taskName"
              hintText="Enter a new task!"
              onChange={this.handleTextFieldChange}
            />
            <TextField
              name="assignee"
              hintText="Assign to:"
              onChange={this.handleTextFieldChange}
            />
            <TextField
              type="number"
              name="intervalNum"
              defaultValue="1"
              onChange={this.handleTextFieldChange}
              floatingLabelText="Complete by:"
              floatingLabelFixed={true}
            />
            <SelectField value={this.state.intervalVal} onChange={this.handleSelectFieldChange}>
              <MenuItem value={1} primaryText="hour(s)" />
              <MenuItem value={2} primaryText="day(s)" />
            </SelectField>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit}>Add Task</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}