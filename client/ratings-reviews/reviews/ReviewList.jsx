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
      sort: 'relevance'
    }
    this.showMoreReviews = this.showMoreReviews.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.sortHelpful = this.sortHelpful.bind(this);
    this.sortNew = this.sortNew.bind(this);
    this.sortRelevance = this.sortRelevance.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if(this.props.reviews !== prevProps.reviews) {
  //     this.setState({
  //       initialReviews: this.props.reviews.slice(0,2),
  //       remainingReviews: this.props.reviews.slice(2)
  //     })
  //   }
  // };
  componentDidMount() {
    this.sortRelevance();
  }

  sortRelevance() {
    this.props.sortRelevance();
    this.setState({
      sort: 'relevance'
    });
    console.log('Sorted by relevance');
  }

  sortHelpful( ) {
    this.props.sortHelpful();
    this.setState({
      sort: 'helpfulness'
    })
    console.log('Sorted by helpfulness');
  }

  sortNew() {
    this.props.sortNew();
    this.setState({
      sort: 'newest'
    })
    console.log('Sorted by newest');
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
    console.log(this.state.sort);
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
              <option>relevance</option>
              <option>helpfulness</option>
              <option>newest</option>

            </select>

            {this.state.initialReviews.map((review) => <ReviewListEntry review={review} key={review.review_id}/>)}

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

export default ReviewList;