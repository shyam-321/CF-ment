import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import { viewPost } from '../../../actions/posts';
import { Modal, Button } from 'react-bootstrap';

const ViewDetails = ({ currentId }) => {
  const [showModal, setshowModal] = useState(false);
  const dispatch = useDispatch();
 const post = useSelector((state) => state.posts);

  const handleOpenModal = (currentId) => {
    dispatch(viewPost(currentId));
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }

  return (
    <div>
      <Button type="button" size="small" color="primary" onClick={() => handleOpenModal(currentId)}><VisibilityTwoToneIcon fontSize="small" /> View  </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
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
      </Modal>
    </div>
  );
}

export default ViewDetails;
