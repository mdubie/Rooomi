import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
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

  componentWillMount() {
    let date = new Date();
    date = date.toISOString();
    this.setState({
      dueAt: date,
    });
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

    if (!description || !dueAt || !assignee || assignee === 'select') {
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

    let date = new Date();
    date = date.toISOString();
    this.setState({
      dueAt: date,
      description: '',
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
    const modalStyle = {
      width: '100%',
      height: '10%',
      margin: 'auto auto',
    };

    return (
      <div style={modalStyle}>
        <Button
          bsStyle="primary"
          bsSize="small"
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
                  value={this.state.assignee}
                  onChange={this.handleRoommateChange.bind(this)}
                >
                  <option value="select">select</option>
                  {this.props.roommates.map(roomate => <option key={roomate} value={roomate}>{roomate}</option>)}
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
