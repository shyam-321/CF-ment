import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';

import {  Button } from '@material-ui/core';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';

class Demo extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <Button type="button" size="small" color="primary"  ><VisibilityTwoToneIcon fontSize="small" /> View  </Button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}


export default Demo;
