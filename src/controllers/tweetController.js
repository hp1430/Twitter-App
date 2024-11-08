import { createTweet as createTweetService,
        getTweets as getTweetsService,
        getTweetsById as getTweetsByIdService,
        deleteTweet as deleteTweetService,
        updateTweet as updateTweetService } from "../services/tweetService.js";


export const createTweet = async (req, res) => {
    try {
        const response = await createTweetService({
            body: req.body.body,
            image: req.file ? req.file.cloudinaryUrl : null
        })
        return res.status(201).json({
            success: true,
            data: response,
            message: "Tweet created successfully"
        })
    }
    catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            })
        }
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const getTweets = async(req, res) => {
    try {
        const response = await getTweetsService();

        return res.status(200).json({
            success: true,
            data: response,
            message: "Tweets fetched successfully"
        });
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const getTweetsById = async(req, res) => {
    try {
        const response = await getTweetsByIdService(req.params.id);

        return res.status(201).json({
            success: true,
            data: response,
            message: "Tweet fetched successfully"
        });
    }
    catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(401).json({
                message: error.message,
                success: false
            });
        }
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

export const deleteTweet = async(req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted the tweet",
            data: response
        })
    }
    catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            })
        }
        return res.status(500).json({
            message: "Something went wrong",
            success: false
        })
    }
}

export const updateTweet = async (req, res) => {
    try{
        const response = await updateTweetService(req.param.id, req.body.body);
        return res.status(200).json({
            success: true,
            message: "Successfully updated the tweet",
            data: response
        })
    }
    catch(error) {
        console.log(error);
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            })
        }
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}