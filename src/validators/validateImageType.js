export const validateImageType = (req, res, next) => {
    if(req.file && !['image/jpeg', 'image/png'].includes(req.file.mimetype)) {
        return res.status(400).json({
            message: "Invalid file type. Only JPEG and PNG are allowed"
        });
    }
    next();
}