import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import dummyDataQA from './QuestionsDummyData.js';

import config from '../../config.js';

import Search from './Search.jsx';
import Questions from './Questions.jsx';
import QuestionsList from './QuestionsList.jsx';

// console.log('Sample Data: ', dummyDataQA.questions)

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

`;

const Container = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
`;

const QuestionsContainer = styled.div`
  margin: 5px;
  padding: 10px;
  position: center;
`;

const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
`;

const MoreAnswersButton = styled.button`
  display:flex;
  text-align:center;
  background:white;
  padding: 20px;
  margin-left: 25px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
    transition: all ease 0.3s;
`;

const AddAQuestionButton = styled.button`
  display:flex;
  text-align:center;
  background:white;
  padding: 20px;
  margin-left: 25px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: lightgrey;
    border: 1px solid black;
    transition: all ease 0.3s;
`;

const photoContainers = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  max-width: 1280px;
`;

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsData: [],
      inputSearch: '',
      filteredData: [],
      questionsShownLength: 4,
      expandList: false
    };

    this.showMoreQA = this.showMoreQA.bind(this);
    this.getData = this.getData.bind(this);
  }

  // invoked upon mounting


  // invoked upon updating
  componentDidUpdate(prevProps, prevState){
    if (this.props.productID !== prevProps.productID) {
      // console.log('PRODUCT ID-->', this.props.productID);
      this.getData();
    }
  }

  // componentDidMount() {
  //   this.getData();
  // }

  getData() {
    axios.get(`qa/questions/?product_id=${this.props.productID}`)
      .then((results)=>{

        this.setState({
          questionsData: results.data.results.sort((a,b) => { a.helpfulness - b.helpfulness}),
          filteredData: results.data.results.sort((a,b) => { a.helpfulness - b.helpfulness})
        })
        // console.log('QA QuestionsData: ', this.state.questionsData)
        console.log('QA FilteredData: ', this.state.filteredData)
      })
      .catch((error) => {
        console.log('QA FETCH Error', error)
      })
  }


  showMoreQA() {

  };


  render() {

    return (

      <FlexContainer>
        <Container>
          <h3>QUESTIONS & ANSWERS</h3>

          <SearchContainer>

            <Search
              questionsData={this.state.questionsData}
              filteredData={this.state.filteredData}/>

          </SearchContainer>

          <QuestionsContainer>
            {this.state.filteredData.slice(0, this.state.questionsShownLength).map((item) => (
              <Questions
                item={item}
                key={item.question_id}
                productID={this.props.productID} />
            ))}

          </QuestionsContainer>

          <MoreAnswersButton onClick={this.showMoreQA}><b>MORE ANSWERED QUESTIONS</b></MoreAnswersButton>

          <AddAQuestionButton onClick={this.showMoreQA}><b>ADD A QUESTION +</b></AddAQuestionButton>



        </Container>
      </FlexContainer>
    )
  }
}


export default QuestionsAndAnswers;