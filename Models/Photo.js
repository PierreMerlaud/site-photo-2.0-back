const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema(
  {
    title: { type: String },
    // url: { type: String, required: true },
    type: { type: String },
    date: { type: Date },
    place: { type: String },
    camera: { type: String },
    film: { type: String },
    subject: { type: String },
    caption: { type: String },
  },
  { timestamps: true } // Add timestamps option
);

module.exports = mongoose.model("Photo", photoSchema, "Photos");
