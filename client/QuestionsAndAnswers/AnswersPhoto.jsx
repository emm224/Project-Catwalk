import React from 'react';
import styled from 'styled-components';

import PhotosModal from './PhotosModal.jsx';

class AnswersPhoto extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.togglePhotosModal = this.togglePhotosModal.bind(this);
  }

  togglePhotosModal() {
    this.setState({
      showModal: !(this.state.showModal)
    });
  }

  render() {

    return (
      <div>
        <PhotoContainer className="Photos">
          <Photos src={this.props.photo} onClick={this.togglePhotosModal} />
          <PhotosModal
            photo={this.props.photo}
            showModal={this.state.showModal}
            togglePhotosModal={this.togglePhotosModal} />
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