import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  background-color: rgb(0,0,0);
  backdrop-filter: blur(4px);
  background-color: rgba(0,0,0,0.4);
  z-index: 150;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: auto;
  padding-top: 200px;
  margin: auto;
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