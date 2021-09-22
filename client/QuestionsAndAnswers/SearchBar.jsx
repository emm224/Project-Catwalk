import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons';

// const SearchBar = styled.input`
//   width: 1000px;
//   box-sizing: border-box;
//   border: 1px lightgrey;
//   border-style: groove;
//   font-size: 16px;
//   padding: 10px 20px;
//   position: relative;
// `;

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

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    }, () => {

      if (this.state.searchTerm.length >= 3) {
        this.searchQuestions(() => {});
      } else {
         this.props.revertToOriginal();
      }
    });
  }

  // REFACTOR!!!
  searchQuestions(callback) {
    const { questions } = this.props;
    const { searchTerm } = this.state;
    const questionHits = [];
    for (let i = 0; i < questions.results.length; i += 1) {
      const question = questions.results[i];
      const upperCaseSearchTerm = searchTerm.toUpperCase();
      const questionBody = question.question_body.toUpperCase();
      if (questionBody.indexOf(upperCaseSearchTerm) !== -1) {
        questionHits.push(question);
      } else {
        const answerIds = Object.keys(question.answers);
        for (let j = 0; j < answerIds.length; j += 1) {
          const answerBody = question.answers[answerIds[j]].body.toUpperCase();
          if (answerBody.indexOf(upperCaseSearchTerm) !== -1) {
            questionHits.push(question);
            break;
          }
        }
      }
    }
    if (questionHits.length === 0) {
      const { showSearchedQuestions } = this.props;
      showSearchedQuestions(questionHits, false, searchTerm);
    } else {
      const { showSearchedQuestions } = this.props;
      showSearchedQuestions(questionHits, true);
    }
    callback(questionHits, searchTerm);
  }

  render() {
    return (
      <div className={`${style.searchBar} searchBar`}>
        <form role="search">
          <label htmlFor="searchQuestions">
            <i className="fa fa-search fa-2x" aria-hidden="true" />
            <input type="text" id="searchQuestions" name="searchQuestions" placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." maxLength="1000" onChange={this.handleChange.bind(this)} />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;


/*

A search bar will appear above the questions list.  Search terms entered in this text input will filter the list for matching results.

After the user types 3 or more characters into the search bar the results will begin to filter to only those containing matching text.  The filter should continue to update as the user adds or removes characters.

The bar should display placeholder text reading “Have a question? Search for answers…”
If the user clears the search term, or removes characters so that less than 3 remain, the list should return to the state where it is not filtered to matching text.

The search filter should work with any other filters or sorts that have been applied, and narrow the results further.   Changes to the sort and rating filters should not remove the search term filter.

*/
