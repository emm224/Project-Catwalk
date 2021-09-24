import React, {useState} from 'react';
import styled from 'styled-components';
import ModalApp from './AddReviewModalApp.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <AddReviewStyle>
        <ModalApp char={this.props.characteristics}></ModalApp>
      </AddReviewStyle>
    );
  }
}

var AddReviewStyle = styled.div`
  border: 1px solid;
  padding-right: 10px;
  padding-left: 10px;
  background-image: linear-gradient(120deg, hsla(175,55%,55%,0.7), hsla(235,55%,55%,0.7));
  cursor: pointer;
  border-radius: 50px;


`;

export default AddReview;