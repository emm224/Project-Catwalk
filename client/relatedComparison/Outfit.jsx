import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';
import config from '../../config.js'

class Outfit extends React.Component {
  constructor(){
    super()
    this.state = {
      currentViewingId:'37317', // what is the product_Id that user is currnely viewing
      relateId : [],
      relatedList :[],
    }
  }
  componentDidMount(){
    var option={
      headers:{
        'Authorization':config.TOKEN,
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentViewingId}/related`,option)
    .then(data=> data.json())
    .then(data=>{
      this.setState({relateId:data})
      console.log(this.state.relateId)
    })
    .then(()=>{
      this.state.relateId.map(id =>{
        fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${id}`,option)
        .then(data=> data.json())
        .then(data=>{
          this.setState({relatedList:[...this.state.relatedList, data]})
        })
      })
    }
    )
  }
  handleClick(){
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('outfit').scrollLeft += 40;
    };
    buttonLeft.onclick = function () {
      document.getElementById('outfit').scrollLeft -= 40;
    };
  }

  render () {
    return (
    <Container>
      <h3>OUTFIT</h3>
      <OutfitContainer id = 'outfit'>
      <ListContainer>
      {this.state.relatedList.map(item=>
        <Card item ={item} key = {item.id}/>
      )}
      </ListContainer>
      </OutfitContainer>
      <button id="slideLeft" type="button" onClick = {this.handleClick}> &#60;</button>
      <button id="slideRight" type="button"onClick = {this.handleClick}> &#62; </button>
    </Container>
    )
  }
}

var ListContainer = styled.div`
  display:flex;
`;

var Container = styled.div`
  width:80%;
  margin:0 auto;
  position:relative;
`;

var OutfitContainer = styled.div`
  padding:20px;
  overflow-x:hidden;
`

export default Outfit;