import React from 'react';
import Card from './Card.jsx';
import styled from 'styled-components';
import config from '../../config.js'

class RelatedList extends React.Component {
  constructor(){
    super()
    this.state = {
      currentViewingId:'37311', // what is the product_Id that user is currnely viewing
      currentItem:[],
      relateId : [],
      relatedList :[],
      selected:{features:[1,2,3,4,5,6]},
      photo:'',
      display:'none',
      currentPhoto:'',
    }
    this.hide = this.hide.bind(this)
  }

  componentDidUpdate() {
    if (this.state.currentViewingId !== this.props.currentItemId) {
      this.setState({currentViewingId:this.props.currentItemId})
      var option={
        headers:{
          'Authorization':config.TOKEN,
          'Content-Type': 'application/json'
        }
      }

      this.setState({relatedList:[]})

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

    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentViewingId}`,option)
    .then(data=> data.json())
    .then(data=>{
      this.setState({currentItem:data})
    })

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

    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentViewingId}`,option)
    .then(data=> data.json())
    .then(data=>{
      this.setState({currentItem:data})
    })
  }

  handleClickRelated(){
    const buttonRight = document.getElementById('relatedslideRight');
    const buttonLeft = document.getElementById('relatedslideLeft');

    buttonRight.onclick = function () {
      document.getElementById('cardContainer').scrollLeft += 80;
    };
    buttonLeft.onclick = function () {
      document.getElementById('cardContainer').scrollLeft -= 80;
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

    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.state.currentViewingId}`,option)
    .then(data=> data.json())
    .then(data=>{
      this.setState({currentItem:data})
    })
  }
  hide(){
    this.setState({display:'none'})
  }
  render () {
    return (
    <Container>
      <div className = 'myTitle'>
      <h3>RELATED PRODUCTS</h3>
      </div>
      <RelatedContainer id ='cardContainer'>
      <ListContainer>
      {this.state.relatedList.map((item, index)=>
        <Card item ={item}
        key = {item.id}
        data = {index}
        list = {this.props.list}
        onClick={this.comparing.bind(this)}
        onClickItem = {this.props.onClick}
        addtoOutfit = {this.props.addtoOutfit}
        />
      )}
      </ListContainer>
      </RelatedContainer>
      <button id="relatedslideLeft" type="button" onClick = {this.handleClickRelated}> &#60;</button>
      <button id="relatedslideRight" type="button"onClick = {this.handleClickRelated}> &#62; </button>
      <div id ='pop' style = {{display: this.state.display}}>
      <button id='popbtn' onClick = {this.hide} ><i className="fas fa-times"></i></button>
      <div id ='shade'>
        <div className='seleted'>

            <img src={this.state.currentPhoto? this.state.currentPhoto : 'https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-4.jpg'} />
            <div className = 'innerCantainer'>
              <div>
            <p>{this.state.currentItem.category}</p>
            <p>{this.state.currentItem.name}</p>
            <p>${this.state.currentItem.default_price}</p>
              </div>
              <div>
              {this.state.currentItem.features? this.state.currentItem.features.map((item,index)=>
              <p key = {index}>{item.feature}: {item.value}</p>
              ):''}
              </div>
            </div>
        </div>
        <div className='seleted'>
            <img src={this.state.photo?this.state.photo: 'https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-4.jpg'} />
            <div className = 'innerCantainer'>
              <div>
            <p>{this.state.selected.category}</p>
            <p>{this.state.selected.name}</p>
            <p>${this.state.selected.default_price}</p>
              </div>
              <div>
              {this.state.selected.features? this.state.selected.features.map((item,index)=>
              <p key = {index}>{item.feature}: {item.value}</p>
              ):''}
                </div>
            </div>

        </div>
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
    opacity: 1;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);
  }
`;
var Container = styled.div`
  height: 480px;
  width:80%;
  margin:0 auto;
  position:relative;
  background-image: url(https://www.themoviedb.org/assets/2/v4/misc/trending-bg-39afc2a5f77e31d469b25c187814c0a2efef225494c038098d62317d923f8415.svg);
  background-repeat: no-repeat;
  background-position: 50% 200px;

`;

var RelatedContainer = styled.div`
overflow:hidden;
margin-left:30px;
margin-right:50px;
margin-top:35px;
`

export default RelatedList;