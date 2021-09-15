import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';

// import {listQuestionsData, answersListData} from './dummyData.js';
import config from '../../config.js';

import Questions from './Questions.jsx';
import QuestionsList from './QuestionsList.jsx';

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

const SearchBar = styled.input`
  width: 1000px;
  box-sizing: border-box;
  border: 1px lightgrey;
  border-style: groove;
  font-size: 16px;
  background-position: 10px 10px;
  padding: 10px 25px 10px 25px;
`;

const SearchButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px lightgrey;
  background:lightgrey;
  text-align: center;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: white;
    border: 1px solid black;
    transition: all ease 0.3s;
  }
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
    console.log(this.props)

    this.state = {
      questionsData: [],
      maxQuestionsDisplayed: 4,
      filteredSearch: false,
      inputSearch: '',
      expandList: false
    };



      //bind
  }

  componentDidMount(){
    console.log('PRODUCT ID', this.props.productID);
    var option={
      headers:{
        'Authorization':config.TOKEN,
        'Content-Type': 'application/json'
      }
    }

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/?product_id=${this.props.productID}`,option)
    .then((results)=>{
      console.log('Item ID: ', this.props.productID);
      this.setState({
        questionsData: results.data
      })
      console.log('QA FETCH: ', this.state.questionsData)
    })
    .catch((error) => {
      console.log('QA FETCH Error', error)
    })
  }




  handleSearch() {

  }


  showMoreList() {

  }


  render() {

    return (

      <FlexContainer>
        <Container>
          <h3>QUESTIONS & ANSWERS</h3>

          <SearchContainer>
            <SearchBar placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." type="text" />
            <SearchButton />
          </SearchContainer>

          <QuestionsContainer>
            <Questions />
          </QuestionsContainer>

          <MoreAnswersButton onClick={this.showMoreList}><b>MORE ANSWERED QUESTIONS</b></MoreAnswersButton>

          <AddAQuestionButton onClick={this.showMoreList}><b>ADD A QUESTION +</b></AddAQuestionButton>



        </Container>
      </FlexContainer>
    )
  }
}


export default QuestionsAndAnswers;