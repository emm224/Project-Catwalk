import React from "react";
import styled from 'styled-components';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      rating:this.props.rating,
    }
  }

  componentDidUpdate(){
    if (this.state.rating !== this.props.rating){
      this.setState({rating:this.props.rating})
    }
  }

  render(){
    return (
    <div className = 'stars'>
      <div className="stars-outer">
          <Inner className="stars-inner" rating = {this.state.rating}></Inner>
        </div>
    </div>
    );
  }
};

const Inner = styled.div`
    width:${props => `${props.rating/5*100}%`};
`


export default StarRating;