import React from 'react';
import reviews from './reviews/app.jsx';
import ratings from './ratings/app.jsx';

class RR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: ''
    }
    //bind
  }


  render() {
    return (
      <div>
        <Reviews />
        <Ratings />
      </div>
    )
  }

}

export default ratings_reviews;