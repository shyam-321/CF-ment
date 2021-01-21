import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import { Modal, Button } from 'react-bootstrap';

const ViewDetails = ({ post }) => {
  const [showModal, setshowModal] = useState(false);

  const handleOpenModal = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }

  return (
    <div>
      <Button type="button" size="small" color="primary" onClick={() => handleOpenModal()}><VisibilityTwoToneIcon fontSize="small" /> View  </Button>
      {
        post ?
          <Modal show={showModal} onHide={handleCloseModal} size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Title: {post.title}
              Blog: {post.blog}
              Writer: {post.writer}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
          </Button>
            </Modal.Footer>
          </Modal> : null
      }

    </div>
  );
}

export default ViewDetails;
