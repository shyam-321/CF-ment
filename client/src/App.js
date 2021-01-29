import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from '@material-ui/core';
import  { useDispatch} from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import blogger from './images/blogger.png';
import useStyles from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';

const App =() => {
    const [currentId, setCurrentId ]= useState(null);
    const classes =useStyles();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return(
        <Container maxidth="lg">
            <div className= {classes.appBar} color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Blogger</Typography>
                <img className={classes.image} src={blogger} alt="blogger" align="center" height="60" />
            </div>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={8}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}
export default App;