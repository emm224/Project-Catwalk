import React from 'react';
import styled from 'styled-components';

class MoreReviews extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.conditionalText = this.conditionalText.bind(this);
  }

  conditionalText() {
    if (this.props.length <= 2) {
      return;
    } else {
      if(this.props.number === 2) {
        return (
          <div onClick={this.handleClick}>
            <MoreReviewsStyle>
              <p>ALL REVIEWS</p>
            </MoreReviewsStyle>
          </div>
        );
      } else if (this.props.number === this.props.length){
        return (
          <div onClick={this.handleClick}>
            <MoreReviewsStyle>
              <p>COLLAPSE REVIEWS</p>
            </MoreReviewsStyle>
          </div>
        );
      }
    }
  }

  handleClick() {
    this.props.switch();
  }

  render() {
    return (
      <div>
        {this.conditionalText()}
      </div>
    );
  }
}

var MoreReviewsStyle = styled.div`
  border: 1px solid;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

export default MoreReviews;