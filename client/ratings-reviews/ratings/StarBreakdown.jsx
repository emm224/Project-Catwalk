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
          <NumberStyle>3</NumberStyle>
          <div>★★★☆☆</div>
        </StarBreakdownStyle>
        <div>100% of reviews recommendt this product</div>
        <div><u>5 star(s)</u></div>
        <div><u>4 star(s)</u></div>
        <div><u>3 star(s)</u></div>
        <div><u>2 star(s)</u></div>
        <div><u>1 star(s)</u></div>
      </div>
    );
  }
}

var StarBreakdownStyle = styled.div`
  display: flex;

  margin-bottom: 20px;
`;

var NumberStyle = styled.div`
  font-size: 48px;
`;


export default StarBreakdown;