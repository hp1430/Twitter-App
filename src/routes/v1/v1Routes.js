import express from 'express';
import tweetRouter from './tweet.js'
import commentRouter from './comment.js'
import signUp from './signUp.js'

const router = express.Router();


router.use('/tweets', tweetRouter);
router.use('/comments', commentRouter);
router.use('/signup', signUp);

export default router;