import React from 'react';
import styled from 'styled-components';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Add a review');
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <AddReviewStyle>
        <p>ADD A REVIEW  +</p>
        </AddReviewStyle>
      </div>
    );
  }
}

var AddReviewStyle = styled.div`
  border: 1px solid;
  padding-right: 10px;
  padding-left: 10px;
  margin-left: 10px;
  cursor: default;
`;

export default AddReview;