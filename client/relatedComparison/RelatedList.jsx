import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';


class RelatedList extends React.Component {
  constructor(){
    super()
    this.state = {
      currentViewingId:'37313', // what is the product_Id that user is currnely viewing
      relateId : [],
      relatedList :[],
    }
  }
  componentDidMount(){
    var option={
      headers:{
        'Authorization':'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',
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
  render () {
    return (
    <div>
      <h3>RELATED PRODUCTS</h3>
      <ListContainer>
      {this.state.relatedList.map(item=>
        <Card item ={item} key = {item.id}/>
      )}
      </ListContainer>
    </div>
    )
  }
}

var ListContainer = styled.div`
  display:flex;
`;

export default RelatedList;