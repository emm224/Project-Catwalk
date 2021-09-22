import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons';

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

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // this.setState( updater, [callback]) OPTIONAL
    this.setState({
      [name]: value
     }, () => {

      this.searchQuestions();
      if (this.state.searchTerm.length >= 3) {
        this.searchQuestions();
      }
    });
  }

  searchQuestions(callback) {

    let questionsContainer = [];

    for (let i = 0; i < this.props.filteredData; i++) {

      let currentQuestion = this.props.filteredData.results[i];
      // console.log('current', currentQuestion)



    }



    // console.log('Props Filtered: ', this.props.filteredData);


  }


  render() {
    return (
      <form>
        <SearchBar
          placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleInputChange(event)}/>

        <SearchButton className="BsSearch"/>

      </form>
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
