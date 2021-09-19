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
  handleClickOutfit(){
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('outfit').scrollLeft += 40;
    };
    buttonLeft.onclick = function () {
      document.getElementById('outfit').scrollLeft -= 40;
    };
  }
  delete(item){
    var newList =this.state.relatedList.splice(this.state.relatedList.indexOf(item),1)
    this.setState({relatedList:this.state.relatedList})
  }
  render () {
    return (
    <Container>
      <h3>Your Outfit</h3>
      <OutfitContainer id = 'outfit'>
      <ListContainer>
      {this.state.relatedList.map(item=>
        <Card item ={item} key = {item.id} onClick = {this.delete.bind(this)} onClickItem = {this.props.onClick}/>
      )}
      </ListContainer>
      </OutfitContainer>
      <button id="slideLeft" type="button" onClick = {this.handleClickOutfit}> &#60;</button>
      <button id="slideRight" type="button" onClick = {this.handleClickOutfit}> &#62; </button>
    </Container>
    )
  }
}

var ListContainer = styled.div`
  display:flex;
  ::after {
    transition: all 0.3s linear 0s;
    content: "";
    width: 70px;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
    opacity: 1;
  }
`;

var Container = styled.div`
  width:80%;
  margin:0 auto;
  position:relative;
`;

var OutfitContainer = styled.div`
  overflow:hidden;
  margin-left:20px;
`

export default Outfit;