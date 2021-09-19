import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';
import config from '../../config.js'

class RelatedList extends React.Component {
  constructor(){
    super()
    this.state = {
      currentViewingId:'37311', // what is the product_Id that user is currnely viewing
      relateId : [],
      relatedList :[],
      selected:{},
      photo:'',
      display:'none',
      currentPhoto:''
    }
    this.hide = this.hide.bind(this)
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

  handleClickRelated(){
    const buttonRight = document.getElementById('relatedslideRight');
    const buttonLeft = document.getElementById('relatedslideLeft');

    buttonRight.onclick = function () {
      document.getElementById('cardContainer').scrollLeft += 40;
    };
    buttonLeft.onclick = function () {
      document.getElementById('cardContainer').scrollLeft -= 40;
    };
  }

  comparing(item,photo){
    this.setState({selected:item,photo,display:'block'});
    var option={
      headers:{
        'Authorization':config.TOKEN,
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentViewingId}/styles`,option)
    .then(data=> data.json())
    .then(data=>{
      this.setState({currentPhoto:data.results[0].photos[0].thumbnail_url})
    })
  }
  hide(){
    this.setState({display:'none'})
  }
  render () {
    return (
    <Container>
      <h3>Related Products</h3>
      <RelatedContainer id ='cardContainer'>
      <ListContainer>
      {this.state.relatedList.map(item=>
        <Card item ={item}
        key = {item.id}
        list = {this.props.list}
        onClick={this.comparing.bind(this)}
        onClickItem = {this.props.onClick}
        />
      )}
      </ListContainer>
      </RelatedContainer>
      <button id="relatedslideLeft" type="button" onClick = {this.handleClickRelated}> &#60;</button>
      <button id="relatedslideRight" type="button"onClick = {this.handleClickRelated}> &#62; </button>
      <div id ='pop' style = {{display: this.state.display}}>
      <button id='popbtn' onClick = {this.hide} >X</button>
        <div className='seleted'>
            <img src={this.state.currentPhoto} />
            <p>{this.props.currentItem.category}</p>
            <p>{this.props.currentItem.name}</p>
            <p>${this.props.currentItem.default_price}</p>
        </div>
        <div className='seleted'>
            <img src={this.state.photo?this.state.photo: 'https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-4.jpg'} />
            <p>{this.state.selected.category}</p>
            <p>{this.state.selected.name}</p>
            <p>${this.state.selected.default_price}</p>
        </div>
      </div>
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

var RelatedContainer = styled.div`
  overflow:hidden;
  margin-left:20px;
`

export default RelatedList;