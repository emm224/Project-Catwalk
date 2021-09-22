import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import dummyDataQA from './QuestionsDummyData.js';

import config from '../../config.js';

import Search from './Search.jsx';
import Questions from './Questions.jsx';
import QuestionsModal from './QuestionsModal.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsData: [],
      searchTerm: '',
      filteredData: [],
      questionsShownLength: 2,
      expandList: false,
      showModal: false
    };

    this.showMoreQA = this.showMoreQA.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.toggleQuestionsModal = this.toggleQuestionsModal.bind(this);
  }

  //only update the questionsData
  componentDidUpdate(prevProps, prevState){

    if (this.props.productID !== prevProps.productID) {
      // console.log('PRODUCT ID-->', this.props.productID);
      this.getData();
    }
  }
  ///needed here
  componentDidMount(){
    this.getData();
  }

  handleSearchInputChange(event) {
    const target = event.target;
    const value = target.value;

    // this.setState( updater, [callback]) OPTIONAL
    this.setState({
      searchTerm: value
     }, () => {

      if (value.length >= 3 || value === '' ) {

        this.searchQuestions();
      }
    });
  }

  getData() {
    axios.get(`/qa/questions/?product_id=${this.props.productID}`)
      .then((results)=>{
        // console.log('GET RESULTS', results.data)
        this.setState({
          questionsData: results.data.results.sort((a,b) => { a.helpfulness - b.helpfulness}),
          filteredData: results.data.results.sort((a,b) => { a.helpfulness - b.helpfulness})
        })
        // console.log('QuestionsData: ', this.state.questionsData);
      // console.log('FilteredData: ', this.state.filteredData);
      })

      .catch((error) => {
        console.log('QA FETCH Error')
    });
  }

  toggleQuestionsModal() {
    this.setState({
      showModal: !(this.state.showModal)
    });
    // console.log('Toggle CLICKED: ', this.state.showModal)
  }

  showMoreQA() {
    if (this.state.questionsShownLength === 4) {
      this.setState({
        questionsShownLength: this.state.filteredData.length,
        expandList: true
      });
    } else {
      this.setState({
        questionsShownLength: 4,
        expandList: true
      });
    }
  }

  render() {

    return (

      <FlexContainer>
        <Container>
          <h3>QUESTIONS & ANSWERS</h3>

          <SearchContainer>
          {/* {console.log('FILTERED', this.state.filteredData)} */}
            <SearchBar
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
              type="text"
              value={this.state.searchTerm}
              onChange={this.handleSearchInputChange}/>

            <SearchButton />



          </SearchContainer>

          <QuestionsContainer>

            {this.state.filteredData.slice(0, this.state.questionsShownLength).map((item) => (
              <Questions
                item={item}
                key={item.question_id}
                productID={this.props.productID} />
            ))}

          </QuestionsContainer>

          <ButtonContainer>
            {this.state.filteredData.length > 4 && this.state.expandList === false ? (

          <MoreAnswersButton
            onClick={this.showMoreQA}>
          <b>MORE ANSWERED QUESTIONS</b>
          </MoreAnswersButton>

            ) : ( null )}

          <AddAQuestionButton
            onClick={this.toggleQuestionsModal}>
          <b>ADD A QUESTION +</b>
          </AddAQuestionButton>

          <QuestionsModal
            showModal={this.state.showModal}
            toggleQuestionsModal={this.toggleQuestionsModal}
            productID={this.props.productID}/>

          </ButtonContainer>
        </Container>
      </FlexContainer>
    )
  }
}


const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

`;

const Container = styled.div`
  border-radius: 10px;
  padding: 5px;
  margin: 5px;
  display:inline;
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

const ButtonContainer = styled.div`
  display: inline;
  white-space: nowrap;
`;

const MoreAnswersButton = styled.button`
  display:inline;
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
  display:inline;
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

const SearchBar = styled.input`
  width: 1000px;
  box-sizing: border-box;
  border: 1px lightgrey;
  border-style: groove;
  font-size: 16px;
  padding: 10px 20px;
  position: relative;
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

  img{
    position: relative;
    margin-top: 0;
    top: 55px;
    left: calc(100% - 50px);
  }
`;

export default QuestionsAndAnswers;