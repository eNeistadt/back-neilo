const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dtvqc9jik',
    api_key: '173952323577482',
    api_secret: 'xHYmP_elaJuUx7b8OOyKsME-5vw',
});

const uploadImage = async (imageBuffer) => {

    const uploadResult = new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream((error, result) => {
            if (error) {
                console.error('Error uploading to Cloudinary:', error);
                reject(error.message);
            }
            resolve(result.secure_url);
        }).end(imageBuffer);
    })
    .then((result) => {
        console.log(result)
        return result;
    })
    .catch((error) => {
        throw new Error(error);
    });

    return uploadResult;
};

module.exports = {
    uploadImage,
};