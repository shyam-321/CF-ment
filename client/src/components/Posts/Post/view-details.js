import React, { useState } from 'react';
import {CardMedia} from '@material-ui/core';
import useStyles from './styles';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import { Modal, Button } from 'react-bootstrap';
import moment from 'moment';


const ViewDetails = ({ post }) => {
  const [showModal, setshowModal] = useState(false);

  const handleOpenModal = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }
  const classes = useStyles();
  return (
    <div>
      <Button type="button" size="small" color="primary" onClick={() => handleOpenModal()}><VisibilityTwoToneIcon fontSize="small" /> View  </Button>
      {
        post ?
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>{post.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <CardMedia className={classes.media} image={post.selectedFile } title={post.title} />
              
              <br></br>
              <p className="font-italic">Posted on:<a href="#">{moment(post.createdAt).format('MMMM Do YYYY')}</a></p>
              <p>{post.blog}</p>
              <br></br>
              <p className="font-italic">Posted by:<a href="#"> {post.writer}</a></p>
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
