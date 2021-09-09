import React from 'react';
import data from '../reviewData.js';
import ReviewList from './ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: data
    }
    //bind
  }


  render() {
    return (
      <div>
        <p>Reviews</p>
        <ReviewList reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default reviews;