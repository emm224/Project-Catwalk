import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class AnswersModal extends React.Component {
  constructor(props) {
    super(props);

    console.log('AnswersModal ITEM: ', this.props.answersData)
    this.state = {
      answer: '',
      name: '',
      email: '',
      photo: [],
      product_id: '',
      sent: false
    };

    this.toggleOnOff = this.toggleOnOff.bind(this);
  }

  toggleOnOff(event) {
    event.stopPropagation();
    this.props.toggleAnswersModal();
  }

  handleInputChange(event) {

    event.stopPropagation();

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  addAnswer() {
    this.setState({
      sent: true
    })

    axios.post('/qa/questions', {
      body: this.state.answer,
      name: this.state.name,
      email: this.state.email,
      photo: this.state.photo,
      product_id: this.props.productID
    })
      .then((response) => {
        console.log('Post Ans Success: ', response.data);
        this.props.toggleAnswersModal(); // close modal
      })
      .catch((error) => {
        console.log('Cannot post new Answer: ', error)
      });
  }

  addPhoto(event) {

  }

  render() {
    const modalStyle = {
      display: this.props.showModal ? 'block' : 'none',
    };
    return (

      <Modal
        className="modal" onClick={this.toggleOnOff} style={modalStyle}>

        <ModalContainer onClick={ this.handleInputChange }>

          <CloseX className="close" onClick={this.toggleOnOff}>&times;</CloseX>

          <NewForm className="addAnswerForm">
            <h1>Submit your Answer</h1>
            <h2>{this.props.productName}: </h2>

            <InputsStyles
              placeholder="Example: jack543!"
              type="text"
              value={this.state.name}
              maxLength="60"
              onChange={ this.handleInputChange }/>

            <p>For privacy reasons, do not use your full name or email address</p>

            <InputsStyles
              placeholder="Example: jack@email.com"
              type="email"
              value={this.state.email}
              maxLength="60"
              onChange={ this.handleInputChange } />
            <p>For authentication reasons, you will not be emailed</p>

            <NewQBodyStyle
              placeholder="Enter Question Here..."
              type="text"
              value={this.state.question}
              maxLength="1000"
              onChange={ this.handleInputChange } />

            <Button onClick={ this.addAnswer }> Submit Question </Button>
            <Button onClick={ this.props.toggleOnOff }> Cancel </Button>

          </NewForm>
        </ModalContainer>
      </Modal>
    );
  }
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  zIndex: 1000;
  overflow: auto;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  margin: auto;
  width: 30%;
  background-color: gainsboro;
  padding: 10px;
  border: 1px solid black;
  zIndex: 1000;
`;

const CloseX = styled.span`
   color: #aaaaaa;
   float: right;
   font-size: 25px;
   font-weight: bold;
`;

const NewForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputsStyles = styled.input`
  padding: 5px;
  width: 150px;
`;

const NewQBodyStyle = styled.textarea`
  padding: 5px;
  height: 100px;
  width: 300px;
`;

const Button = styled.button`
  height: 60px;
  width: 175px;
  background-color: white;
  padding: 10px;
  margin-top: 10px;
  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
  border-radius: 5px;
  transition: all ease 0.3s;
  }
`;



export default AnswersModal;