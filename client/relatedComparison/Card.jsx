import React from 'react';
import styled from 'styled-components';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photo:[],
    }
  }
  componentDidMount(){
    var option={
      headers:{
        'Authorization':'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',
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
          <div className="container">
          <img src={this.state.photo} />
            <p>Category:{this.props.item.category}</p>
            <p>{this.props.item.name}</p>
            <p>${this.props.item.default_price}</p>
          </div>
      </CardStyle>
        )
  }
};

var CardStyle = styled.div`
  margin-left:10px;
  border:black 2px solid;
  width:150px;
  img{
    width:100%;
    height:180px;
    object-fit: fill;
  }
  p{
    margin:0;
    margin-left:10px;
    padding:0;

  }
`;
export default Card;