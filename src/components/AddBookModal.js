import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import ListForm from './ListForm';
import "./Modal.css";

function AddBookModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false) ;
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link  onClick={handleShow}>
        Add Books
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='my-modal' closeButton>
          <Modal.Title className='modal-title'>Add Book Here</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <ListForm />
       </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>

      </Modal>

    </>
  );
}

export default AddBookModal;