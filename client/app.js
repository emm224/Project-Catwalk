import React from 'react';
import ReactDOM from 'react-dom';
import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/index.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
      <div>Overview placeholder</div>
      <div id ='relatedAndComparison'>
          <RelatedList />
          <h4>Placeholder for outfit sections</h4>
      </div>

      <div>Questions and Answers</div>
      <div id ='questionsAnswers'>
          <QuestionsAndAnswers />
          <h4>Placeholder for Q and A sections</h4>
      </div>


      <div>RATINGS & REVIEWS</div>
      <div id='rateReview'>
          <RateReview />
      </div>
    </div>)
  }
}

export default App;