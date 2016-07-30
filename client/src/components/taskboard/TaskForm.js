import React from 'react';
import { Modal, Button, FieldGroup, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from "react-bootstrap-date-picker";

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      assignee: '',
      dueAt: new Date(),
      showModal: false,
    };
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

  handleSubmit(e) {
    e.preventDefault();

    const description = this.state.description;
    const assignee = this.state.assignee;
    const assignor = this.props.username;
    const house = this.props.house;
    const dueAt = this.state.dueAt;

    if (!description || !dueAt || !assignee) {
      this.close();
      return;
    }

    this.props.socket.emit('addTask', {
      description,
      assignee,
      assignor,
      house,
      dueAt,
      isCompleted: false,
    });

    this.setState({
      description: '',
      dueAt: new Date(),
    });

    this.close();
  }

  handleDesciptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleRoommateChange(e) {
    this.setState({
      assignee: e.target.value,
    });
  }

  handleDueAtChange(value) {
    this.setState({
      dueAt: value,
    });
  }

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open.bind(this)}
        >
          Add a new roomate task!
        </Button>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup >
                <ControlLabel>Working example with validation</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.description}
                  placeholder="Enter task description here"
                  onChange={this.handleDesciptionChange.bind(this)}
                />
              </FormGroup>
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Select a roomate</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  onChange={this.handleRoommateChange.bind(this)}
                >
                  {this.props.roommates.map(roomate => <option value={roomate}>{roomate}</option>)}
                </FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Label</ControlLabel>
                <DatePicker
                  value={this.state.dueAt}
                  onChange={this.handleDueAtChange.bind(this)} />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleSubmit.bind(this)} bsStyle="success">Add task</Button>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
