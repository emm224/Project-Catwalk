import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      name: '',
      email: '',
      product_id: '',
      sent: false
    };

    this.toggleOnOff = this.toggleOnOff.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  toggleOnOff(event) {
    event.stopPropagation();
    this.props.toggleQuestionsModal();
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

  addQuestion() {
    this.setState({
      sent: true
    })
    axios.post('/qa/questions', {
      body: this.state.question,
      name: this.state.name,
      email: this.state.email,
      product_id: this.props.productID
    })
      .then((response) => {
        console.log('Post Q Success: ', response.data);
        this.props.toggleQuestionsModal(); // close modal
      })
      .catch((error) => {
        console.log('Cannot post new Question: ', error)
      });
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

          <NewForm className="AddQuestionForm">
            <h1>Ask Your Question</h1>
            <h2>About the {this.props.productName}</h2>

            <InputsStyles
              placeholder="Example: jack543!"
              type="text"
              value={this.state.name}
              maxLength="60"
              onChange={ this.handleInputChange }/>

            <p>For privacy reasons, do not use your full name or email address</p>

            <InputsStyles
              placeholder="Why did you like the product or not?"
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

            <Button onClick={ this.addQuestion }> Submit Question </Button>
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
   float: right; /* Positioned to the right of the parent container whichever size it is */
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



export default QuestionsModal;