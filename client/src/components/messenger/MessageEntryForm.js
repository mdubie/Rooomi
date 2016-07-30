import React from 'react';
import { Modal, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class MessageEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
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

    const username = this.props.username;
    const house = this.props.house;
    const message = this.state.message;

    if (!message) {
      this.close();
      return;
    }

    this.props.socket.emit('addMessage', {
      username,
      house,
      message,
      time: Date.now()
    });

    this.setState({
      message: '',
    });

    this.close();
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const modalStyle = {
      width: '100%',
      height: '10%',
      margin: 'auto auto',
    }

    return (
      <div style={modalStyle}>
        <Button
          bsStyle="primary"
          bsSize="small"
          onClick={this.open.bind(this)}
        >
          Add a new message!
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
                  value={this.state.message}
                  placeholder="Enter a message"
                  onChange={this.handleMessageChange.bind(this)}
                />
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
