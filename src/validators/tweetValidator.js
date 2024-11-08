import mongoose from "mongoose";

export const getTweetByIdManualValidator = (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

    if(!isValidId) {
        return res.status(400).json({
            error: "Invalid tweet id",
            success: false
        })
    }

    next();
}