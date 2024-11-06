import express from 'express';
import { getTweets, getTweetsById, createTweet } from '../../controllers/tweetController.js';
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';

const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetsById);

router.post('/',validate(tweetZodSchema), createTweet);

export default router;