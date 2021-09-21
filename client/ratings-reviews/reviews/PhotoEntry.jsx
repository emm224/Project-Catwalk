import React from 'react';
import styled from 'styled-components';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render() { return (<PhotoStyle src={this.props.photo}/>); }
}

var PhotoStyle = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-left: 25px;
  display: flex;
`;

export default PhotoEntry;