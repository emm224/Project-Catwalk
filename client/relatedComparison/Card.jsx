import React from 'react';
import styled from 'styled-components';
// import config from '../../config.js';
import StarRating from '../StarRating.js'
import ImageContainer from './ImageContainer.jsx'
class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      photo:[],
      rating:0,
      styles:[{'original_price':0, 'sale_price':0, photos:[{thumbnail_url:''}]}],
      show:false,
      styleIndex:0,
    }

  }
  componentDidMount(){
    var option={
      headers:{
        'Authorization':process.env.TOKEN,
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${this.props.item.id}/styles`,option)
        .then(data=> data.json())
        .then(data=>{
          this.setState({photo: data.results[0].photos[0].thumbnail_url, styles:data.results})
        })

    fetch(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${this.props.item.id}`,option)
        .then(data=> data.json())
        .then(data=>{
          var rating = data.ratings;
          var totalPeople = 0;
          var totalStar = 0;
          for (var key in rating){
            totalPeople += Number(rating[key])
            totalStar += (Number(rating[key])*Number(key))
          }
          var averageRating = totalStar/totalPeople
          this.setState({rating: averageRating})
        })
  }
  showButton(){
    this.setState({show:true})
  }
  hideButton(){
    this.setState({show:false})
  }
  handleClick(index){
    this.setState({styleIndex:index})
  }
  render(){
    return (
      <CardStyle>
          <div className="container" >
            {this.props.list === 'related' ? <span className = 'star' onClick={()=>{this.props.onClick(this.props.item, this.state.photo)}}><i className="fas fa-adjust fa-lg"></i></span>:<span onClick={()=>{this.props.onClick(this.props.item, this.state.photo)}} className = 'delete'><i className="far fa-trash-alt"></i></span>}
            <div >
          <div id ='cardImage-container' onMouseOver = {this.showButton.bind(this)} onMouseLeave = {this.hideButton.bind(this)}>

          <ImageContainer show = {this.state.show} onClick={this.handleClick.bind(this)}>
            {this.state.styles.map((item,index)=>
                <img src={item.photos[0].thumbnail_url ? item.photos[0].thumbnail_url:'https://bashooka.com/wp-content/uploads/2015/10/404-errrrr-page-4.jpg' } alt="Image not found" key = {index} className = 'photolist'/>
            )}
            </ImageContainer>
            </div>
          </div>
            <div onClick={()=>{this.props.onClickItem(this.props.item)}} className = 'itemInfo'>
            <p>{this.props.item.category}</p>
            <p>{this.props.item.name}</p>
            {this.state.styles[this.state.styleIndex].sale_price?
            <>
            <p style={{textDecoration:'line-through'}}>${this.state.styles[this.state.styleIndex].original_price}</p>
            <p style={{color:'red'}}>${this.state.styles[this.state.styleIndex].sale_price}</p><p>Style: {this.state.styles[this.state.styleIndex].name}</p></>:<><p>${this.state.styles[this.state.styleIndex].original_price}</p><p>Style: {this.state.styles[this.state.styleIndex].name}</p></>}
            </div>
            <div className = 'buttonConatainer'>
              {this.state.rating? <StarRating rating = {this.state.rating}/>:<StarRating rating = {0}/>}
            {this.props.list === 'related' ? <button className='addtoOutfit' onClick={()=>{this.props.addtoOutfit(this.props.item)}}><i className="fas fa-heartbeat fa-lg" ></i></button>: '' }
            </div>

          </div>
      </CardStyle>
        )
  }
};

var CardStyle = styled.div`
  overflow:hidden;
  margin-left:15px;
  margin-right:15px;
  width:249px;
  min-width:240px;
  position:relative;
  border:none;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px;
  background-image: linear-gradient(to right, #ebf1f1, #d5dbd9, #c0c5c2, #acafac, #999a96);
  opacity:1;
  cursor:pointer;
  p{
    margin:0;
    margin-left:10px;
    padding:0;

  }
`;
export default Card;