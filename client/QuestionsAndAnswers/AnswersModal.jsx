
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class AnswersModal extends React.Component {
  constructor(props) {
    super(props);

    // console.log('AnswersModal ITEM: ', this.props.item)
    // console.log('AnswersModal ID: ', this.props.questionID)
    this.state = {
      answer: '',
      name: '',
      email: '',
      photo: [],
      sent: false
    };
    this.toggleOnOff = this.toggleOnOff.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  toggleOnOff(event) {
    event.stopPropagation();
    this.props.toggleAnswersModal();
  }

  handleInputChange(event) {
    if (event.target.placeholder === 'Example: jack@email.com') {
      this.setState({
        email: event.target.value,
      });
    } else if (event.target.placeholder === 'Example: jack543!') {
      this.setState({
        name: event.target.value,
      });
    } else {
      this.setState({
        answer: event.target.value,
      });
    }
  }

  addAnswer() {
    this.setState({
      sent: true
    });

    axios.post('/qa/questions', {
      body: this.state.answer,
      name: this.state.name,
      question_id: this.props.questionID,
      email: this.state.email,
      photo: this.state.photo,
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
    const photos = [];
    photos.push(URL.createObjectURL(event.target.files[0]));

    this.setState({
      images: photos,
    }, () => {});
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

          <NewForm className="addAnswerForm">
            <h1>Submit your Answer</h1>
            <h2>{this.props.productName}: </h2>

            <em> Please fill out the following form. <b>Mandatory</b> fields are marked with <b><sup>*</sup></b> </em>
          <br />
          <label>
          <b><sup>*</sup>What is your nickname? : </b>
            <InputsStyles
              placeholder="Example: jack543!"
              required type="text"
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
              placeholder="Example: jack@email.com"
              required type="email"
              value={this.state.email}
              maxLength="60"
              autoComplete="off"
              onChange={(event) => { this.handleInputChange(event); }}/>
            <p>For authentication reasons, you will not be emailed</p>
            </label>
          <br />
          <label>
          <b><sup>*</sup>Your Answer: </b>
            <NewQBodyStyle
              placeholder="Enter Question Here..."
              required type="text"
              value={this.state.question}
              maxLength="1000"
              autoComplete="off"
              onChange={(event) => { this.handleInputChange(event); }}/>
            </label>
          <br />
            <label>
            <b>Upload your photos: </b>
            <AddPhoto type="file" onChange={this.addPhoto} />
            </label>
            <Button onClick={ this.addAnswer }> Submit Answer </Button>
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
  border-radius:50px;
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

const AddPhoto = styled.input`
margin-left: auto;
`;



export default AnswersModal;