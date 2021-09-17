import React from 'react';
import axios from 'axios';
import styled from 'styled-components';



const AnswersContainer = styled.div`
  flex-direction:row;
  display: flex;
`;

const AnswerBody = styled.p`
  padding-top: 6px;
  padding-left: 10px;
`;


const Answers = (props) => {

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

  return (

      <div>
        <AnswersContainer>
          <h3> A: </h3>
          <AnswerBody>
            {this.props.item.body}
          </AnswerBody>


        </AnswersContainer>


      </div>
  )
}


export default Answers;