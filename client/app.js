import React from 'react';
import ReactDOM from 'react-dom';
import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
import ProductOverview from './Overview/index.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
      <div id='productOverview'>Product Overview Placeholder
        <ProductOverview />
      </div>
      <div id ='relatedAndComparison'>
          <RelatedList />
          <h4>Placeholder for outfit sections</h4>
      </div>


      <div>RATINGS & REVIEWS</div>
      <div id='rateReview'>
          <RateReview />
      </div>
    </div>)
  }
}

export default App;