import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles';
import {useDispatch } from 'react-redux';
import {deletePost} from '../../../actions/posts';
import ViewDetails from './view-details';

const ellipsify = (str) => {
  if (str.length > 10) {
      return (str.substring(0, 10) + "...");
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
            <MoreHorizIcon fontSize="default" />
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
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} ><DeleteIcon fontSize="small" /> Delete</Button>
        </CardActions>         
      </Card>
      
    );
    
}


// ReactDOM.render( {...props} , document.getElementsByClassName('main'));


export default Post;

