import React, { useState } from 'react';
import {CardMedia} from '@material-ui/core';
import useStyles from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { Modal, Button } from 'react-bootstrap';
import {useDispatch } from 'react-redux';
import {deletePost} from '../../../actions/posts';


const AskDel = ( {deletePost, posts}) => {
  const [showModal, setshowModal] = useState(false);

  const handleOpenModal = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }
  
  const posts = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
  }
  return (
    
    <div>
      <Button type="button" size="small" color="primary" onClick={() => handleOpenModal()}><DeleteIcon fontSize="small" /> Delete  </Button>
      {
      
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            Are you sure you want to delete?
            <Button type="button" size="small" color="primary" onClick={() => dispatch(deletePost(posts._id))}><DeleteIcon fontSize="small" /> Delete  </Button>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
          </Button>
            </Modal.Footer>
          </Modal> 
      }

    </div>
  );
}

export default AskDel;
