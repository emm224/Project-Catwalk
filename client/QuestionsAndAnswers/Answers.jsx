import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import AnswersPhoto from './AnswersPhoto.jsx';


class Answers extends React.Component {
  constructor(props) {
    super(props);

    console.log('Answers Item:', this.props.item)

    this.state = {
      helpful: this.props.item.helpfulness,

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

    event.preventDefault();

    const { item } = this.props;
    const questionID = item.question_id;

    axios.put('/qa/questions', { questionID })
      .then(() => {})
      .catch((error) => {
        console.log('Helpful Clicked Error!', error)
    });
  }

  // console.log('ProductID: ', props.productID)
  // console.log('Product Info: ', props.item)
  // console.log('Question: ', props.item.question_body)
  // console.log('Answers listed by answerID: ', props.item.answers)
  // console.log('All answerIDs: ', Object.keys(props.item.answers))

  // let answerIDKeys = Object.keys(props.item.answers);
  // let answersArr = [];

  // for (let i = 0; i < answerIDKeys.length; i++) {
  //   let current = answerIDKeys[i];

  //   answersArr.push(props.item.answers[current]);
  // }

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



        </PhotosContainer>

          {this.props.item.photos.map((photo, index) => (

            <AnswersPhoto
              photo={photo}
              key={index} />
          ))}

        <FooterContainer>


           by {' '} {answerer}

           <b> {seller === answerer ? ( ' - Seller' ):('')} </b>

           {', '}

           {new Date(this.props.item.date).toLocaleDateString('en-US', {
                  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
                })}


          <DividerSpacing>  |  </DividerSpacing>

           <HelpfulSpacing> {'  Helpful? '} </HelpfulSpacing>

          <Button name="helpful" onClick={this.handleClick}> Yes </Button>

            { '(' }
            {this.state.helpful}
            { ')' }

          <DividerSpacing>  |  </DividerSpacing>

          <Button name="report" onClick={this.handleClick}> Report </Button>

        </FooterContainer>


      </div>
      )
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