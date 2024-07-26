const mongoose = require("mongoose");
require("dotenv").config();

const connectToMongo = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    if (res) {
      console.log("Connected Successfully");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
