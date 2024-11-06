import express from 'express';
import { getTweets, getTweetsById } from '../../controllers/tweetController.js';

const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetsById);


export default router;