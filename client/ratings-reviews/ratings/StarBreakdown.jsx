import React from 'react';
import styled from 'styled-components';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarBreakdownStyle>
          <NumberStyle>3.5</NumberStyle>
          <div>★★★☆☆</div>
        </StarBreakdownStyle>

        <StarBarGraphStyle>100% of reviews recommend this product</StarBarGraphStyle>

        <StarBarGraphStyle><u>5 star(s) </u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>4 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>3 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>2 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>1 star(s) </u> =========================</StarBarGraphStyle>

      </div>
    );
  }
}

var StarBreakdownStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

var StarBarGraphStyle = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
`;

var NumberStyle = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;


export default StarBreakdown;