import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  zIndex: 1000;
  overflow: auto;
`;

const Photo = styled.img`
    background-color: grey;
    width: auto;
    max-width: 1200px;
    height: 600px;
    margin: auto;
    padding: auto;
    position: relative;
    border: 1px solid black;
    border-radius: 10px;
    display: flex;
`;

const PhotosModal = (props) => {

  const modalStyle = {
    display: props.displayModal ? 'block' : 'none',
  };

  function toggleOnOff(event) {
    event.stopPropagation();
    props.togglePhotosModal();
  }

  return (
    <Modal className="modal" onClick={toggleOnOff} style={modalStyle} >
      <Photo
        src={props.photo}
        className="modal-content"
        onClick={(event) => event.stopPropagation()} />
    </Modal>
  );
}

export default PhotosModal;