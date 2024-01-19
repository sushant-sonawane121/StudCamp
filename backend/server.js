const express = require("express");
const dbConnect = require("./src/dbManager");
const cors = require("cors");
const User = require("./src/Schemas/User");
const College = require("./src/Schemas/College");
// const Admin = require("./src/Schemas/Admin");

const app = express();
const port = process.env.port || 3000;
app.use(express.json());
app.use(cors());
dbConnect();

app.post("/student/register", async (req, res) => {
  try {
    const { username, email, bdate, collegeId, regiId, password } = req.body;

    if (!username || !email || !bdate || !collegeId || !regiId || !password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const user = new User({
      username,
      email,
      bdate,
      collegeId,
      regiId,
      password,
      isAdmin: false,
    });

    const savedUser = await user.save();
    console.log("User saved successfully:", savedUser);

    res.status(201).json({ message: "data saved successfuly" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
});

app.post("/college/register", async (req, res) => {
  try {
    const { username, collegeId, collegename, email, address, password } = req.body;

    if (
      !username ||
      !collegeId ||
      !collegename ||
      !email ||
      !address ||
      !password
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const college = new College({
      username,
      collegeId,
      collegename,
      email,
      address,
      password,
      isAdmin: false,
    });

    const savedclg = await college.save();
    console.log("College saved successfully:", savedclg);

    res.status(201).json({ message: "college data saved successfuly" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.log("error: ", error);
  }
});




app.listen(port, () =>
  console.log(`server is live on http://localhost:${port}`)
);
