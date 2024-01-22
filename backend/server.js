const express = require("express");
const dbConnect = require("./src/dbManager");
const cors = require("cors");
const User = require("./src/Schemas/User");
const College = require("./src/Schemas/College");
const Contact = require("./src/Schemas/Contact");
const Admin = require("./src/Schemas/Admin");

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
    const { username, collegeId, collegename, email, address, password } =
      req.body;

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

app.post("/contact", async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    let data = Object.keys(req.body).length;
    if (data > 3) {
      return res.status(400).json({ error: "Bad request" });
    }

    if (!fullname || !email || !message) {
      return res.status(400).json({ error: "All form fields are required." });
    }
    const contacts = new Contact({ fullname, email, message });
    let savedContact = contacts.save();
    if (savedContact) {
      return res
        .status(201)
        .json({ success: true, message: "Data stored successfully." });
    }

    console.log(req.body);

    return res.status(200).json({ success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: `${error}` });
  }
});

app.post("/adminLogin", async (req, res) => {
  try {
    const data = req.body;

    const admin = new Admin();

    const sc = await Admin.findOne({
      username: data.username,
      password: data.password,
    });
    if (sc) {
      res.status(200).send({ message: "Data found successfully", data: sc._id, });
    } else {
      res.status(404).send({ message: "Data not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
});

// let addmin  = async ()=>{
//   const adminData = {
//     username:"sushant@121",
//     email:"sushantsonawane121@gmail.com",
//     mobile:8421242342,
//     password:"sushant@121",
//     isStudent:false,
//     isCollege:false,
//     isAdmin:true,
//   }
//   const admin = new Admin(adminData);
//   admin.save();
// }
// addmin();

app.listen(port, () =>
  console.log(`server is live on http://localhost:${port}`)
);
