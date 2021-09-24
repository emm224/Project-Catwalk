import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import dummyDataQA from './QuestionsDummyData.js';
import config from '../../config.js';

import Questions from './Questions.jsx';
import QuestionsModal from './QuestionsModal.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questionsData: [],
      searchTerm: '',
      filteredData: [],
      maximumQsDisplayed: 4,
      expandList: false,
      showModal: false
    };
    this.showMoreQA = this.showMoreQA.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.filterQuestions = this.filterQuestions.bind(this);
    this.toggleQuestionsModal = this.toggleQuestionsModal.bind(this);
    this.originalRender = this.originalRender.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  componentDidUpdate(prevProps, prevState){
    const { productID } = this.props;

    if (productID !== prevProps.productID) {
      this.originalRender();
    }
  }

  handleSearchChange() {
    this.setState({
      searchTerm: event.target.value,
    }, () => {
      if (event.target.value.length > 2 || event.target.value === '') {
        this.filterQuestions();
      }
    });
  }

  filterQuestions() {
    const { searchTerm, filteredData, questionsData } = this.state;

    if (searchTerm.length === 0) {
      this.setState({ filteredData: questionsData })
    } else {
      const filteredArr = [];
      for (let i = 0; i < filteredData.length; i += 1) {
        if (filteredData[i].question_body.toLowerCase().includes(searchTerm)) {
          filteredArr.push(filteredData[i]);
        }
      }
      this.setState({ filteredData: filteredArr });
    }
  }

  getData() {
    axios.get(`/qa/questions/?product_id=${this.props.productID}`)
      .then((results)=>{
        this.setState({
          questionsData: results.data.results.sort((a,b) => { b.question_helpfulness - a.question_helpfulness}),
          filteredData: results.data.results.sort((a,b) => { b.question_helpfulness - a.question_helpfulness})
        });
      })
      .catch((error) => {console.log('Could not fetch All Questions')});
  }

  toggleQuestionsModal() {
    this.setState({showModal: !(this.state.showModal)});
  }

  showMoreQA() {
    const { maximumQsDisplayed, filteredData } = this.state;
    if (maximumQsDisplayed === 4) {
      this.setState({
        maximumQsDisplayed: filteredData.length,
        expandList: true
      });
    } else {
      this.setState({
        maximumQsDisplayed: 4,
        expandList: false
      });
    }
  }

  originalRender() {
    axios.get(`/qa/questions/?product_id=${this.props.productID}`)
      .then((results)=>{
        this.setState({
          questionsData: results.data.results.sort((a,b) => { b.question_helpfulness - a.question_helpfulness}),
          filteredData: results.data.results.sort((a,b) => { b.question_helpfulness - a.question_helpfulness})
        });
      })
      .catch((error) => {console.log('Could not fetch All Questions')});
  }

  render() {

    return (
      <FlexContainer>
        <Container>
          <h3>QUESTIONS & ANSWERS</h3>
        <span>
          <form onSubmit={(event) => { event.preventDefault(); }}>
            <SearchBar
              placeholder="Have a question? Search for answers…"
              type="text"
              value={this.state.searchTerm}
              onChange={(event) => { event.preventDefault(); this.handleSearchChange(); }} />
            <SearchButton className="fas fa-search" />
          </form>
        </span>

          <QuestionsContainer>

            {this.state.filteredData.slice(0, this.state.maximumQsDisplayed).map((item) => (
              <Questions
                item={item}
                key={item.question_id}
                query={this.state.searchTerm}
                productID={this.props.productID} />
            ))}
          </QuestionsContainer>

          <ButtonContainer>
            {this.state.filteredData.length > 4 && !(this.state.expandList) ? (

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
            productID={this.props.productID}
            productName={this.props.productName}/>

          </ButtonContainer>
        </Container>
      </FlexContainer>
    )
  }
};

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
  border-radius:50px;

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
  border-radius:50px;

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
  height: 50px;
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
border: none;
background:transparent;
text-align: center;
color: black;
border-radius: 0 5px 5px 0;
cursor: pointer;
font-size: 20px;
&:hover {
  background-color: lightgrey;
  border: none;
border-radius: 5px;
transition: all ease 0.3s;
}
`;

export default QuestionsAndAnswers;