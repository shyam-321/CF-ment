import express from 'express';
import {getPosts, createPost, viewPost, updatePost, deletePost} from '../controllers/posts.js';

const router = express.Router();


router.get('/',getPosts);
router.post('/',createPost);
router.get('/:id',viewPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;