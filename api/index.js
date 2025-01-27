const mongoose = require("mongoose");
const express = require("express");
const { MongoDBConnect } = require("../db/db.connect.js");
MongoDBConnect();
const { movieModel, eventsModel } = require(`../models/movies.model.js`);

const app = express();

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

app.listen(5500, () => `Backend-Integration Web Server is Online`);
