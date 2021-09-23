import React, {useState} from 'react';
import Modal from './AddReviewModal.jsx';

export default function ModalApp() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <p onClick={() => setIsOpen(true)}> ADD A REVIEW +</p>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>
    </>
  );
}