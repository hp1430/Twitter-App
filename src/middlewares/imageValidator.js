import cloudinary from '../config/cloudinaryConfig.js';

export const uploadImage = async (req, res, next) => {
  if (!req.file) {
    req.file = {};  // If no file uploaded, skip the upload process
    return next();
  }

  try {
    // Create a Data URI from the image buffer
    const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'twitter_images'  // Specify a folder in Cloudinary
    });

    // Attach the Cloudinary URL to the request object for further use
    req.file.cloudinaryUrl = result.secure_url;
    console.log(req.file.cloudinaryUrl);
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(500).json({ error: 'Image upload failed', details: error.message });
  }
};
