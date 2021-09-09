import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';

class RelatedList extends React.Component {
  render () {
    return (
    <div>
      <h3>RELATED PRODUCTS</h3>
      <ListContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ListContainer>
    </div>
    )
  }
}

var ListContainer = styled.div`
  display:flex;
`;

export default RelatedList;