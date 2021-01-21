import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    // const posts = [
    //     {
    //         _id: 3456789,
    //         selectedFile: '23',
    //         title: 'Hello World',
    //         blog: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //         writer: 'John Deo',
    //         createdAt: '2011-08-12T20:17:46.384Z',
    //         tags: [
    //             '1', '2', '3'
    //         ]
    //     }, {
    //         _id: 3456789,
    //         selectedFile: '23',
    //         title: 'Hello World',
    //         blog: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //         writer: 'John Deo',
    //         createdAt: '2011-08-12T20:17:46.384Z',
    //         tags: [
    //             '1', '2', '3'
    //         ]
    //     }, {
    //         _id: 3456789,
    //         selectedFile: '23',
    //         title: 'Hello World',
    //         blog: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    //         writer: 'John Deo',
    //         createdAt: '2011-08-12T20:17:46.384Z',
    //         tags: [
    //             '1', '2', '3'
    //         ]
    //     }
    // ]
    const classes = useStyles();
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing="3">
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
    );

}
export default Posts;