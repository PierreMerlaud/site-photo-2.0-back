// const cloudinary = require("cloudinary").v2;
const Photo = require("../Models/Photo");

// Configure Cloudinary API
// cloudinary.config({
//   cloud_name: "dc77pdcjd",
//   api_key: "571556387397141",
//   api_secret: "FF-eP7z3Ifj9dRel3JENcvxArfA",
// });

exports.createPhoto = async (req, res) => {
  try {
    // const { name, caption, file } = req.body;
    // console.log('reqqq', req.body)

    // Upload photo to Cloudinary
    // const result = await cloudinary.uploader.upload(file.path, {
    //   folder: 'Photos',
    //   overwrite: false,
    //   transformation: [
    //     { width: 1000, height: 1000, crop: 'fill' },
    //     { overlay: 'text:Arial_40_bold:© PM', gravity: 'south_east', x: 10, y: 10, color: 'white' }
    // ],
    //   public_id: 'my-photo',
    //   copyright:{
    //     author: 'Pierre Merlaud',
    //     usage_rights: 'Editorial use only'
    //   }
    // });

    // url: result.secure_url,

    // Create new photo document in MongoDB
    const newPhoto = new Photo({
      title: req.body.title,
      type: req.body.type,
      date: req.body.date,
      place: req.body.place,
      camera: req.body.camera,
      film: req.body.film,
      subject: req.body.subject,
      caption: req.body.caption,
    });
    await newPhoto.save();

    // Send response with photo data
    res.status(201).json(newPhoto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating photo!" });
  }
};

exports.getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find();
    res.status(200).json(photos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving photos!" });
  }
};
