import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import AnswersPhoto from './AnswersPhoto.jsx';

class Answers extends React.Component {
  constructor(props) {
    super(props);

    console.log('Answers Item:', this.props.item)
    console.log('SellerName:', this.props.sellerName)

    this.state = {
      helpful: this.props.item.helpfulness,
      clickedYes: false,
      clickedReport: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (!this.state.clickedYes && event.target.name === 'helpful') {
      // if Helpful
        // if not, then Report
      axios.put('/qa/questions', {
        answer_id: this.props.item.id,
        name: event.target.name,
      })
        .then((response) => {
          this.setState({
            clickedYes: true,
            helpful: this.state.helpful + 1
          });
        });
    } else {
      axios.put('/qa/questions', {
        answer_id: this.props.item.id,
        name: event.target.name
      })
        .then(() => {
          this.setState({
            clickedReport: true,
          })
        })
        .then(() => {
          console.log('ANSWER ID: ' + this.props.item.id + ' HAS BEEN REPORTED FOR REVIEW!')
      });
    }
  }

  render() {
    const seller = this.props.sellerName.asker_name;
    const answerer = this.props.item.answerer_name;
    return (
      <div>
        <AnswersContainer>
          <h3> A: </h3>
            <AnswerBody>
              {this.props.item.body}
            </AnswerBody>
        </AnswersContainer>

        <PhotosContainer>
          {this.props.item.photos.map((photo, index) => (
            <AnswersPhoto
              photo={photo}
              key={index} />
            ))}
        </PhotosContainer>

        <FooterContainer>
           by {' '} {answerer}
            <b> {seller === answerer ? ( ' - Seller' ):('')} </b>
           {', '}
           {new Date(this.props.item.date).toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}

          <DividerSpacing>  |  </DividerSpacing>
           <HelpfulSpacing> {' Helpful? '} </HelpfulSpacing>

          <Button name="helpful" onClick={this.handleClick}> Yes </Button>
            {'('}{this.state.helpful}{')'}

          <DividerSpacing>  |  </DividerSpacing>
          {!this.state.clickedReport ? (
          <Button name="report" onClick={this.handleClick}> Report </Button>
          ) : (
          <b> Reported </b>
            )}
        </FooterContainer>
      </div>
    );
  }
}

const AnswersContainer = styled.div`
  flex-direction:row;
  display: flex;
`;

const AnswerBody = styled.p`
  padding-top: 5px;
  padding-left: 10px;
`;

const FooterContainer = styled.div`
  display: inline;
  white-space: nowrap;
  margin-left: 28px;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline;

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
`;

const PhotosContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DividerSpacing = styled.p`
  margin-left: 5px;
  margin-right: 5px;
  font-size: 125%;
  display: inline;
`;

const HelpfulSpacing = styled.p`
  display: inline;
`;


export default Answers;