const mongoose = require(`mongoose`);

const eventsSchema = new mongoose.Schema(
  {
    title: String,
    host: String,
    imgURL: String,
    details: String,
    dressCode: String,
    ageRestrictions: String,
    tags: [String],
    from: String,
    to: String,
    location: String,
    price: Number,
    speakers: [
      {
        name: String,
        post: String,
      },
    ],
    online: Boolean,
  },
  { timestamps: true }
);

const eventsModel = mongoose.model("events", eventsSchema);

module.exports = { eventsModel };
