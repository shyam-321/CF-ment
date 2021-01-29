import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch } from 'react-redux';
import {deletePost} from '../../../actions/posts';
import ViewDetails from './view-details';
//import AskDel from './ask-delete';

const ellipsify = (str) => {
  if (str.length > 60) {
      return (str.substring(0, 60) + "...");
  }
  else {
  return str;
}
}


const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile } title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.writer}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          <Button 
            style={{ color: 'white' }} 
            size="small" 
            onClick={()=>setCurrentId(post._id)}>
            <EditTwoToneIcon fontSize="default" />Edit
          </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{ellipsify(post.blog)}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <ViewDetails post = {post}/>
          {/*<AskDel posts={post._id}/>*/}
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} ><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>         
      </Card>
      
    );
    
}


// ReactDOM.render( {...props} , document.getElementsByClassName('main'));


export default Post;

