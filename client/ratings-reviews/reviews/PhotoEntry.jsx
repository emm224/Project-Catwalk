import React, {useState} from 'react';
import styled from 'styled-components';

class PhotoEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.props.photo);
  }

  // photo() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   return (
  //     <>
  //       <PhotoStyle src={this.props.photo} onClick={() => setIsOpen(true)}/>
  //       <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
  //     </>
  //   );
  // }

  render() {
    return (
      <PhotoStyle src={this.props.photo} onClick={this.handleClick}/>
    );
  }
}

var PhotoStyle = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-left: 25px;
  display: flex;
`;

export default PhotoEntry;