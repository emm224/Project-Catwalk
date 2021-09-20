import React from 'react';
import styled from 'styled-components';

class AnswersPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.selectModal = this.selectModal.bind(this);
  }

  selectModal() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {

    return (
      <div>
        <PhotoContainer className="Photos">
          <Photos src={this.props.photo} onClick={this.selectModal} />

        </PhotoContainer>
      </div>
    );
  }
}

const Photos = styled.img`
  max-height: 100%;
  max-width: 100%;
  margin-left: 25px;
`;

const PhotoContainer = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  margin-left: 20px;
`;



export default AnswersPhoto;