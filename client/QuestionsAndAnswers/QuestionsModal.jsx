import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class QuestionsModal extends React.Component {
  constructor(props) {
    super(props);

    console.log('QModal ProductID Here:', this.props.productID)
    this.state = {
      question: '',
      name: '',
      email: '',
      sent: false
    };

    this.toggleOnOff = this.toggleOnOff.bind(this);
    this.escFunction = this.escFunction.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  toggleOnOff(event) {
    event.stopPropagation();
    this.props.toggleQuestionsModal();
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      this.props.exitQuestionsModal();
    }
  }

  handleInputChange(event) {
    if (event.target.placeholder === 'Why did you like the product or not?') {
      this.setState({
        email: event.target.value,
      });
    } else if (event.target.placeholder === 'Example: jackson11!') {
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState({
        question: event.target.value,
      });
    }
  }

  addQuestion() {
    this.setState({
      sent: true
    });
    const params = {
      body: this.state.question,
      name: this.state.name,
      email: this.state.email,
      product_id: Number(this.props.productID),
    };

    axios.post('/qa/questions/:product_id', params)
      .then((response) => {
        this.props.toggleQuestionsModal(); // close modal
      })
      .catch((error) => {
        console.log('Cannot post new Q: ', error)
      });
  }

  render() {
    const modalStyle = {
      display: this.props.showModal ? 'block' : 'none',
    };
    return (

      <Modal
        className="modal" onClick={this.toggleOnOff} style={modalStyle}>

        <ModalContainer onClick={(event) => { event.stopPropagation(); }}>

        <CloseX className="close" onClick={this.toggleOnOff}>&times;</CloseX>

          <NewForm className="AddQuestionForm">
            <h1>Ask Your Question</h1>
            <h2>About the {this.props.productName}</h2>

            <em> Please fill out the following form. <b>Mandatory</b> fields are marked with <b><sup>*</sup></b> </em>
          <br />
          <label>
            <b><sup>*</sup>What is your nickname? : </b>
            <InputsStyles
              placeholder="Example: jackson11!" required
              type="text"
              value={this.state.name}
              maxLength="60"
              autoComplete="off"
              onChange={(event) => { this.handleInputChange(event); }}/>
            <p>For privacy reasons, do not use your full name or email address</p>
          </label>
          <br />
          <label>
          <b><sup>*</sup>Your email: </b>
            <InputsStyles
              placeholder="Why did you like the product or not?" required
              type="email"
              value={this.state.email}
              maxLength="60"
              autoComplete="off"
              onChange={(event) => { this.handleInputChange(event); }}/>
            <p>For authentication reasons, you will not be emailed</p>
          </label>
          <br />
          <label>
          <b><sup>*</sup>Your Question: </b>
            <NewQBodyStyle
              placeholder="Enter Question Here..." required
              type="text"
              value={this.state.question}
              maxLength="1000"
              autoComplete="off"
              onChange={(event) => { this.handleInputChange(event); }}/>
            </label>
            <br />


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
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 10px;
  z-index: 1000;
  background-color: gainsboro;
  width: 500px;
  max-width:80%;




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





export default QuestionsModal;