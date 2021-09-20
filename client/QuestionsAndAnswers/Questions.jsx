import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Answers from './Answers.jsx';
import AnswersModal from './AnswersModal.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    console.log('Questions ITEM: ', this.props.item)
    // console.log('Helpfulness counter: ', this.props.item.question_id)

    const helpfulCounter = this.props.item.question_helpfulness;
    console.log('Helpful Counter: ', helpfulCounter)

    this.state = {
      answersData: [],
      answersShownLength: 2,
      loadedState: false,
      expandList: false,
      helpful: this.props.item.question_helpfulness,
      clickedHelpful: false,
      clickedReport: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showMore = this.showMore.bind(this);
    this.getAnswersData = this.getAnswersData.bind(this);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (this.props.item.id !== prevProps.item.id) {
  //     this.getAnswersData();
  //   }
  // }

  componentDidMount() {
    this.getAnswersData();
  }

  handleClick(event) {

    event.preventDefault();

    const { item } = this.props;
    const questionID = item.question_id;

    axios.put('/qa/questions', { questionID })
      .then((response) => {
        console.log('Questions CLICKED response', response);
      })
      .catch((error) => {
        console.log('Helpful Clicked Error!', error)
    });
  }

  showMore() {
    if (answersShownLength === 2) {
      console.log('AnswersData: ', this.state.answersData)
      this.setState({
        answersShownLength: this.state.answersData.length,
        expandList: true
      });
    } else {
      this.setState({
        answersShownLength: 2,
        expandList: true
      });
    }
  }

// console.log('ProductID: ', this.props.productID)
// console.log('Product Info: ', this.props.item)
// console.log('Question: ', this.props.item.question_body)
// console.log('Answers listed by answerID: ', this.props.item.answers)
// console.log('All answerIDs: ', Object.values(this.props.item.answers))

  getAnswersData() {
    let answerArr = Object.values(this.props.item.answers);
    console.log('Answers Arr:', answerArr);

    this.setState({
      answersData: answerArr
    });
  }

  render() {

    return (
      <Container>
        <QContainer>
          <h3> Q: {this.props.item.question_body} </h3>
          <QuestionLinks>
            <HelpfulSpacing> Helpful? </HelpfulSpacing>

            <Button name="Helpful" onClick={this.handleClick} >Yes</Button>

            <DividerSpacing>  |  </DividerSpacing>

            <Button name="addAnswer" onClick={this.handleClick} >Add Answer</Button>
          </QuestionLinks>
        </QContainer>

        <div>
          <div>
            <ScrollList>
            {this.state.answersData.slice(0, this.state.answersShownLength).map((answer) => (

              <Answers
              item={answer}
              key={answer.id}
              productID={this.props.productID}
              sellerName={this.props.item}
              itemReported={this.props.item.reported} />
            ))}
            </ScrollList>

          </div>

          <div>

          <AnswersModal />


          </div>



        </div>
      </Container>
    )
  }
}



const Container = styled.div`
  width: 100%;
  border-top: 0px solid grey;
  border-radius: 10px;
  margin: 10px;
  padding: 0px 20px 0px 20px;
  display: block;
`;

const QContainer = styled.div`
  flex-direction:row;
  display: flex;
`;

const QuestionLinks = styled.div`
  display: inline;
  margin-left: auto;
`;

const Button = styled.button`
  text-decoration: underline;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: inline;

  &:hover {
    text-decoration: none;
    font-weight: bold;
  }
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

const ScrollList = styled.ul`
  list-style:none;
  max-height:400px;
  margin:0;
  overflow:auto;
  padding:0;
  text-indent:10px;
`;

export default Questions;

/*

 A list of answers will appear below the question.  The entire answer list will be titled “A:”.

Each answer will start on a new line, where the text body of the answer will display.

Below the answer, the username of the answerer and the date the answer was written will show in the format “by [username], Month DD, YYYY”.   If the answer is from the seller, then the username should display “Seller” in bold.

A link should appear next to the text “Helpful?” reading “Yes (#)” with the count of selections for that answer.  Clicking on this link should increase the count for that response.  A customer should not be able to vote more than once for this selection.

Next to the link for “Helpful?”, a second link reading “Report” will appear.  Clicking on this link will mark the answer for internal review.  A user should not be able to report an answer more than once.   After clicking on this link, the “Report” link should change to static text that reads “Reported”.   Answers that have been reported should be marked as such in the system for further action to be taken.

Answers should appear in the order of ‘helpfulness’.  However, any answers from the seller should appear at the top of the list.  There should be no other sort order for answers.

By default only two answers will show.  The rest should be hidden.  If more than two answers exist for the question, a link to “See more answers” should display below the list.  Clicking on this link should expand the area below the question and display the remainder of the list.

The view for the full list of answers should be confined to half of the screen, and the list within should be scrollable.   When expanded, the button to “See more answers” should change to read “Collapse answers”.

*/


