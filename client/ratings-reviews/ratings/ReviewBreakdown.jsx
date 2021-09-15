import React from 'react';
import styled from 'styled-components';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: this.props.characteristics
    }
  }

  render() {
    return (
      <div>
        <div>Size</div>
          <ScaleStyle>
            <div>============</div>
            <div>=========▼==</div>
            <div>============</div>
          </ScaleStyle>
          <ScaleStyle>
            <p>Too small</p>
            <p>Perfect</p>
            <p>Too large</p>
          </ScaleStyle>

        <div>Comfort</div>
        <ScaleStyle>
            <div>============</div>
            <div>======▼=====</div>
            <div>============</div>
          </ScaleStyle>
          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

      </div>
    );
  }
}

var ReviewBreakdownStyle = styled.div`
`;

var ScaleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
`;


export default ReviewBreakdown;