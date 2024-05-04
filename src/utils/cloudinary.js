import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: "dn4vx4hmk", 
  api_key: "425525791565466", 
  api_secret: "ukpvZG7a4oKC8FhQYoO8wRpaXqc", 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        console.log('file uploaded successfully on cloudinary', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as 
        // the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}

