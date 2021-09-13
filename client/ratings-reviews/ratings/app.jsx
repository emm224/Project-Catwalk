import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: []
    }
    //bind
  }


  render() {
    return (
      <div>
        <p>Ratings</p>
      </div>
    )
  }

}

export default Ratings;