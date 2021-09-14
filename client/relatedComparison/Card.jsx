import React from 'react';
import styled from 'styled-components';

var Card =() =>{
  return (
  <CardStyle>
    <img></img>
      <div className="container">
        <p>Picture</p>
        <h4>Title</h4>
        <p>Description</p>
      </div>
  </CardStyle>
    )
};

var CardStyle = styled.div`
  background: lightgreen;
  width:150px;
  height:200px;
  margin-left:10px;
`;
export default Card;