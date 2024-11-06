export const getTweets = (req, res) =>{
    return res.json({
        message : "Welcome to the tweet route"
    });
}

export const getTweetsById = (req, res) =>{
    return res.json({
        message : "Welcome to the tweet route",
        id: req.params.id
    });
}