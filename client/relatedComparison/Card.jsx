import React from 'react';
import styled from 'styled-components';
import config from '../../config.js';
import StarRating from '../StarRating.js'
class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photo:[],
      rating:3,
    }
  }
  componentDidMount(){
    var option={
      headers:{
        'Authorization':config.TOKEN,
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.item.id}/styles`,option)
        .then(data=> data.json())
        .then(data=>{
          this.setState({photo: data.results[0].photos[0].thumbnail_url})
        })
  }
  render(){
    return (
      <CardStyle>
          <div className="container" >
            {this.props.list === 'related' ? <span className = 'star' onClick={()=>{this.props.onClick(this.props.item, this.state.photo)}}>	&#9734;</span>:<span onClick={()=>{this.props.onClick(this.props.item, this.state.photo)}} className = 'delete'>X</span>}
          <img src={this.state.photo ? this.state.photo:'https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-4.jpg' } alt="Image not found"/>
            <p>{this.props.item.category}</p>
            <p>{this.props.item.name}</p>
            <p>${this.props.item.default_price}</p>
            <StarRating rating = {this.state.rating}/>
          </div>
      </CardStyle>
        )
  }
};

var CardStyle = styled.div`
  margin-left:13px;
  border:gray 2px solid;
  width:200px;
  min-width:200px;
  position:relative;
  img{
    width:100%;
    height:240px;
    object-fit: fill;
  }
  p{
    margin:0;
    margin-left:10px;
    padding:0;

  }
`;
export default Card;