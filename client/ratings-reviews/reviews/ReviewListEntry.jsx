import React from 'react';
import styled from 'styled-components';

const ReviewListEntry = (props) => (
  <ReviewListEntryStyle>

    <TopRowStyle>
      <div>★★★☆☆</div>
      <div>
        {props.review.reviewer_name}, {props.review.date.toString().slice(0,9)}
      </div>
    </TopRowStyle>

    <SummaryStyle> <b>{props.review.summary}</b> </SummaryStyle>

    <SummaryStyle>{props.review.body}</SummaryStyle>


    <BottomRowStyle>Helpful? <u>Yes</u> ({props.review.helpfulness}) | <u>Report</u></BottomRowStyle>

  </ReviewListEntryStyle>
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ReviewListEntryStyle = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid;
`;

var TopRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

var SummaryStyle = styled.div`
  margin-bottom: 10px;
`;

var BottomRowStyle = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
`;

export default ReviewListEntry;
