import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';
import config from '../../config.js'

class Outfit extends React.Component {
  constructor(){
    super()
    this.state = {
      relatedList :[{
        "id": 37311,
        "campus": "hr-rfe",
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
            {
                "feature": "Fabric",
                "value": "Canvas"
            },
            {
                "feature": "Buttons",
                "value": "Brass"
            }
        ]
    }],
    }
  }
  componentDidUpdate(pp){
    if (this.props.item !== pp.item){
      if((this.state.relatedList).includes(this.props.item)){
        console.log('exists')
      } else {
        this.setState({relatedList:[...this.state.relatedList, this.props.item]})
      }
    }

  }
  handleClickOutfit(){
    const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('outfit').scrollLeft += 50;
    };
    buttonLeft.onclick = function () {
      document.getElementById('outfit').scrollLeft -= 50;
    };
  }
  delete(item){
    var newList =this.state.relatedList.splice(this.state.relatedList.indexOf(item),1)
    this.setState({relatedList:this.state.relatedList})
  }
  render () {
    return (
    <Container>
      <OutterContainer>
      <div className = 'myTitle'>
      <h3>OUTFIT</h3>
      </div>
      <OutfitContainer id = 'outfit'>
      <ListContainer>
      {this.state.relatedList.map(item=>
        <Card item ={item} key = {item.id} onClick = {this.delete.bind(this)} onClickItem = {this.props.onClick}/>
      )}
      </ListContainer>
      </OutfitContainer>
      <button id="slideLeft" type="button" onClick = {this.handleClickOutfit}> &#60;</button>
      <button id="slideRight" type="button" onClick = {this.handleClickOutfit}> &#62; </button>
      </OutterContainer>
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
    opacity: 1;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
  ::before {
    transition: all 0.3s linear 0s;
    content: "";
    width: 70px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    opacity: 1;
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
`;

var Container = styled.div`
  width:80%;
  height:470px;
  margin:auto;
  position:relative;
`;

var OutfitContainer = styled.div`
  overflow:hidden;
  margin-left:30px;
  margin-right:50px;
  margin-top:20px;
`

var OutterContainer = styled.div`
  height:100%;
  background-image:url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(255,255,255,.4);
`


export default Outfit;