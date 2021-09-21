import React from 'react';
import styled from 'styled-components';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 2
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.switchNumber = this.switchNumber.bind(this);
  }
  switchNumber() {
    if (this.state.number === 2) {
      this.setState({
        number: this.props.reviews.length
      });
    } else if (this.state.number === this.props.reviews.length) {
      this.setState({
        number: 2
      });
    }
  }
  conditionalMoreReviews() {
    if (this.props.reviews[0] === undefined) {
      return;
    } else {
      return <MoreReviews
        switch={this.switchNumber}
        number={this.state.number}
        length={this.props.reviews.length}/>
    }
  }
  handleSelect(event) {
    if (event.target.value === 'relevance') {
      this.props.sortRelevance();
    } else if (event.target.value === 'helpfulness') {
      this.props.sortHelpful();
    } else if (event.target.value === 'newest') {
      this.props.sortNew();
    }
  }

  render() {
    return(
      <div>
        {this.props.reviews ?
          <ReviewListStyle>
            {this.props.reviews.length} reviews, sorted by {' '}
            <select
            value={this.state.sort}
            onChange={this.handleSelect}
            name='sort'>
              <option value='relevance'>relevance</option>
              <option value='helpfulness'>helpfulness</option>
              <option value='newest' >newest</option>
            </select>

            <ReviewStyle>
            {this.props.reviews.slice(0, this.state.number).map((review) => <ReviewListEntry review={review} key={review.review_id}/>)}
            </ReviewStyle>

            <ReviewButtonsStyle>
              {this.conditionalMoreReviews()}
              <AddReview />
            </ReviewButtonsStyle>
          </ReviewListStyle>
        : '' }
      </div>
    );
  }
}

var ReviewButtonsStyle = styled.div`
  display: flex;
`;
var ReviewListStyle = styled.div`
  width: 650px;
`;
var ReviewStyle = styled.div`

`;

export default ReviewList;