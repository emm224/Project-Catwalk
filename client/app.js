import React from 'react';
import ReactDOM from 'react-dom';
import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';

import Outfit from './relatedComparison/Outfit.jsx';

class App extends React.Component {
  render () {
    return (
    <div>
      <div>Overview placeholder</div>
      <div id ='relatedAndComparison'>
          <RelatedList />
          <Outfit />

      </div>

      <div>QUESTIONS & ANSWERS</div>
      <div id ='questionsAnswers'>
          <QuestionsAndAnswers />
      </div>

      <div id='rateReview'>
          <RateReview />
      </div>

    </div>)
  }
}

export default App;