import React from "react";
import styled from 'styled-components';

class StarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      rating:this.props.rating,
    }
  }
  render(){
    return (
      <div className='starStyle'>
      {['one',2,3,4,5].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            className={index <= this.state.rating ? "on" : "off"}
            onClick={() => this.setState({rating:index})}
          >
            <span className="stars"><i className="fas fa-star"></i></span>
          </Button>

        );
      })}
    </div>
    );
  }
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding:0.5px;
`

export default StarRating;