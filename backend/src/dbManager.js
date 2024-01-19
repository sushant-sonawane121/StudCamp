const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/StudCamp";
const dbConnect = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1); // Exit the process on connection failure
  }
};

module.exports = dbConnect;
