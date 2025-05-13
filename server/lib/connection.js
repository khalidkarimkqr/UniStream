const mongoose = require("mongoose");

const connectDb = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI, {
    dbName: "myapp",
  });

  if (connection) {
    console.log("MongoDB connected successfully");
  }

  return;
};

module.exports = connectDb;
