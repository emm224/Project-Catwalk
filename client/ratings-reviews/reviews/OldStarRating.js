import React from "react";
import styled from 'styled-components';

class OldStarRating extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      rating:this.props.rating,
    }
  }
  render(){
    return (
      <div>
      {['one',2,3,4,5].map((star, index) => {
        index += 1;
        return (
          <Button
            type="button"
            key={index}
            className={index <= this.state.rating ? "on" : "off"}
            onClick={() => this.setState({rating:index})}
          >
            <span className="stars">&#9733;</span>
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

export default OldStarRating;