import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import {listQuestionsData, answersListData} from './dummyData.js';

import Questions from './Questions.jsx';
import QuestionsList from './QuestionsList.jsx';



const Container = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  max-width: 1280px;
`;

const QuestionsContainer = styled.div`
  margin: 5px;
  padding: 10px;
  position: center;
`;

const SearchContainer = styled.div`
  width: 80%;
  position: relative;
  display: flex;
`;

const SearchBar = styled.input`
  width: 80%;
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



class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsData: [],
      maxQuestionsDisplayed: 4,
      filteredSearch: false,
      inputSearch: '',
      expandList: false
    };

      //bind
  }

  componentDidMount() {
    this.fetchQuestionID();
  }

  fetchQuestionID() {
  // console.log('DummyData: ', listQuestionsData);
    axios.get('/qa/questions')
      .then((response) => {
        console.log('Fetch Q Response: ', response);
        this.setState({
          questionsData: response.data
        });
      })
      .catch((error) => {
        console.log('Cannot retrieve Questions: ', error)
      });
  }


  handleSearch() {

  }


  showMoreList() {

  }


  render() {

    return (

      <Container>


        <SearchContainer>

          <SearchBar placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." type="text" />
          <SearchButton />

        </SearchContainer>

        <QuestionsContainer>

          <Questions />


        </QuestionsContainer>

      </Container>




    )
  }
}


export default QuestionsAndAnswers;