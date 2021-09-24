import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Answers from './Answers.jsx';
import AnswersModal from './AnswersModal.jsx';

import SearchHighlight from './SearchHighlight.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);

    // console.log('Questions ITEM: ', this.props.item)
    // console.log('Helpfulness counter: ', this.props.item.question_id)

    const helpfulCounter = this.props.item.question_helpfulness;
    // console.log('Helpful Counter: ', helpfulCounter)

    this.state = {
      answersData: [],
      answersDisplayed: 2,
      expandList: false,
      helpful: this.props.item.question_helpfulness,
      clickedYes: false,
      clickedReport: false,
      showModal: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.showMore = this.showMore.bind(this);
    this.toggleAnswersModal = this.toggleAnswersModal.bind(this);
    this.getAnswersData = this.getAnswersData.bind(this);
  }

  componentDidMount() {
    this.getAnswersData();
  }

  componentDidUpdate(prevProps, prevState){
    if (this.props.productID !== prevProps.productID) {
      this.originalRender();
    }
  }

  handleClick(event) {
    if (!this.state.clickedYes && event.target.name === 'helpful') {
      axios.put('/qa/questions', {
        question_id: this.props.item.question_id,
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
        question_id: this.props.item.question_id,
        name: event.target.name
      })
        .then(() => {
          this.setState({
            clickedReport: true,
          });
        });
    }
  }

  showMore() {
    if (this.state.answersDisplayed === 2) {
      // console.log('AnswersData: ', this.state.answersData)
      this.setState({
        answersDisplayed: this.state.answersData.length,
        expandList: true
      });
    } else {
      this.setState({
        answersDisplayed: 2,
        expandList: false
      });
    }
  }

  toggleAnswersModal() {
    this.setState({
      showModal: !(this.state.showModal)
    });
    console.log('Toggle CLICKED: ', this.state.showModal)
  }

  getAnswersData() {
    let answerArr = Object.values(this.props.item.answers);
    // console.log('Answers RAW:', answerArr);
    // console.log('Answers SORTED:', answerArr.sort((a,b)=> b.helpfulness - a.helpfulness));
    let sellersResponse = false;

    for (let i = 0; i < answerArr.length; i++) {
      let currentAnswer = answerArr[i];
      let answererName = currentAnswer.answerer_name;
      let sellerName = this.props.item.asker_name;

      if (answererName === sellerName) {
        answerArr.splice(i, 1);
        answerArr.unshift(currentAnswer);
        sellersResponse = true;
      }
    }

    if (sellersResponse) {
      this.setState({
        answersData: answerArr
      })
    } else {
      this.setState({
        answersData: answerArr.sort((a,b)=> {b.helpfulness - a.helpfulness})
      });
    }
  }

  originalRender() {
    let answerArr = Object.values(this.props.item.answers);
    // console.log('Answers RAW:', answerArr);
    // console.log('Answers SORTED:', answerArr.sort((a,b)=> b.helpfulness - a.helpfulness));
    let sellersResponse = false;

    for (let i = 0; i < answerArr.length; i++) {
      let currentAnswer = answerArr[i];
      let answererName = currentAnswer.answerer_name;
      let sellerName = this.props.item.asker_name;

      if (answererName === sellerName) {
        answerArr.splice(i, 1);
        answerArr.unshift(currentAnswer);
        sellersResponse = true;
      }
    }

    if (sellersResponse) {
      this.setState({
        answersData: answerArr
      })
    } else {
      this.setState({
        answersData: answerArr.sort((a,b)=> {b.helpfulness - a.helpfulness})
      });
    }
  }

  render() {

    const { answersData, helpful, answersDisplayed, showModal, expandList } = this.state;

    return (
      <Container>
        <QContainer>
          <h3> Q: {this.props.query !== '' && this.props.item.question_body.includes(this.props.query) ?
          (<SearchHighlight
            query={this.props.query}
            body={this.props.item.question_body} />) : this.props.item.question_body}</h3>

          <QuestionLinks>
            <HelpfulSpacing> Helpful? </HelpfulSpacing>
            <Button name="helpful" onClick={this.handleClick} >Yes</Button>
            {'('}{helpful}{')'}
            <DividerSpacing>  |  </DividerSpacing>
            <Button name="addAnswer" onClick={this.toggleAnswersModal} >Add Answer</Button>

          </QuestionLinks>
        </QContainer>

        <div>
          {answersDisplayed <= 2 ? (
          <div>
            {answersData.slice(0, answersDisplayed).map((answer, index) => (
            <AnsContainer key={index}>
              <Answers
              item={answer}
              key={answer.id}
              productID={this.props.productID}
              sellerName={this.props.item}
              itemReported={this.props.item.reported} />
            </AnsContainer>
            ))}
          </div>
          ) : (
            <ScrollList>
              {answersData.slice(0, answersDisplayed).map((answer, index) => (
              <AnsContainer key={index}>
                <Answers
                item={answer}
                key={answer.id}
                productID={this.props.productID}
                sellerName={this.props.item}
                itemReported={this.props.item.reported} />
              </AnsContainer>
              ))}
            </ScrollList>
          )}
          <br />

          {answersData.length > 2 ? (
              <AnsContainer>

                  {(!expandList) ? (
                    <MoreAnswersButton onClick={ this.showMore}> <b> See More Answers </b> </MoreAnswersButton>
                  ) : (
                    <MoreAnswersButton onClick={ this.showMore}> <b> Collapse Answers </b> </MoreAnswersButton>
                  )}

              </AnsContainer>
            ) : (null)}

          {answersData.map((answer, index) => (
            <AnswersModal
              key={index}
              item={answer}
              showModal={showModal}
              toggleAnswersModal={this.toggleAnswersModal}
              questionID={this.props.item.question_id}/>
          ))}
        </div>
      </Container>
    );
  }
};

const Container = styled.div`
  width: 100%;
  border-top: 0px solid grey;
  border-radius: 10px;
  margin: 0;
  padding: 0px 20px 0px 20px;
  display: block;
`;

const QContainer = styled.div`
  flex-direction:row;
  display: flex;
`;

const AnsContainer = styled.div`
  padding:0px;
  margin:0px;
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
  }`;

  const MoreAnswersButton = styled.button`
    display:inline;
    text-align:center;
    background:white;
    padding: 20px;
    margin-left: 0;
    white-space: nowrap;
    cursor: pointer;
    border-radius:50px;

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
    border-radius: 5px;
    transition: all ease 0.3s;
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


// console.log('ProductID: ', this.props.productID)
// console.log('Product Info: ', this.props.item)
// console.log('Question: ', this.props.item.question_body)
// console.log('Answers listed by answerID: ', this.props.item.answers)
// console.log('All answerIDs: ', Object.values(this.props.item.answers))