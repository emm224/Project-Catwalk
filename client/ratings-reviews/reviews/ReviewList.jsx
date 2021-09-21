import React from 'react';
import styled from 'styled-components';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialReviews: this.props.reviews.slice(0,2),
      remainingReviews: this.props.reviews.slice(2),
      sort: ''
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }


  showMoreReviews() {
    var newInitial = this.state.initialReviews;
    var newRemaining = this.state.remainingReviews;
    if (newRemaining.length >= 2) {
      newInitial.push(this.state.remainingReviews[0]);
      newInitial.push(this.state.remainingReviews[1]);
      newRemaining = newRemaining.slice(2);
    } else if (newRemaining.length === 1) {
      newInitial.push(this.state.remainingReviews[0]);
      newRemaining.pop();
    }
    this.setState({
      initialReviews: newInitial,
      remainingReviews: newRemaining
    })
  }
  conditionalMoreReviews() {
    if (this.state.remainingReviews === undefined) {
      return;
    } else if (this.state.remainingReviews.length > 0) {
      return <MoreReviews show={this.showMoreReviews}/>
    }
  }

  handleSelect(event) {
    this.setState({sort: event.target.value});
    if (event.target.value === 'relevance') {
      this.sortRelevance();
    } else if (event.target.value === 'helpfulness') {
      this.props.sortHelpful();
    } else if (event.target.value === 'newest') {
      this.props.sortNew();
    }
  }
//
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
            {this.state.initialReviews.map((review) => <ReviewListEntry review={review} key={review.review_id}/>)}
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