import express from 'express';
import { getTweets, getTweetsById, createTweet, deleteTweet, updateTweet } from '../../controllers/tweetController.js';
import { validate } from '../../validators/zodValidator.js'
import { tweetZodSchema } from '../../validators/tweetZodSchema.js';
import { upload } from '../../config/multerConfig.js';
import { uploadImage } from '../../middlewares/imageValidator.js';
import { validateImageType } from '../../validators/validateImageType.js';
import { getTweetByIdManualValidator } from '../../validators/tweetValidator.js';

const router = express.Router();

router.get('/', getTweets)

router.get('/:id', getTweetByIdManualValidator, getTweetsById);

router.post('/', upload.single('twitterImage'), validateImageType, uploadImage, validate(tweetZodSchema), createTweet);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, updateTweet)

export default router;