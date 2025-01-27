const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const { MongoDBConnect } = require("../db/db.connect.js");
MongoDBConnect();
const { movieModel } = require(`../models/movies.model.js`);
const { eventsModel } = require(`../models/Eventsmodel.js`);

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.route("/movies").get(async (req, res) => {
  try {
    const data = await movieModel.find();
    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.json({ error: "No Such Data Exists" });
    }
  } catch (err) {
    console.log(`Failed to Fetch Data from DB ${err}`);
  }
});

app.route("/events").get(async (req, res) => {
  try {
    const data = await eventsModel.find();

    if (data.length > 0) {
      res.status(200).json(data);
    } else {
      res.json({ error: "No Such Data Exists" });
    }
  } catch (err) {
    console.log(`Failed to Fetch Data from DB ${err}`);
  }
});

app.route("/events").post(async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const newEvent = new eventsModel(data);
    await newEvent.save();
    res.status(200).json({ message: "successfully stored" });
  } catch (err) {
    console.log(`Failed to Fetch Data from DB ${err}`);
    res
      .status(500)
      .json({ message: `Failed to Fetch Data from DB ${err.message}` });
  }
});

app.listen(5500, () => console.log(`Backend-Integration Web Server is Online`));
