import React, {useState} from 'react';
import styled from 'styled-components';
import ModalApp from './ModalApp.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }


  render() {
    return (
      <AddReviewStyle>
        <ModalApp></ModalApp>
      </AddReviewStyle>
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