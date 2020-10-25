const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l5wed.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.port || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(express.static("doctors"));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("Node.js is working");
});

client.connect((err) => {
  if (err) {
    console.log("errors detected", err);
    return;
  }
  console.log("Database connected");
  const appointmentsCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("appointments");
  const doctorsCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("doctors");

  app.post("/addappointment", (req, res) => {
    const appointment = req.body;
    appointmentsCollection
      .insertOne(appointment)
      .then((result) =>
        res.status(200).send(result.insertedCount ? true : false)
      )
      .catch((err) => console.log(err));
  });

  app.get("/appointments", (req, res) => {
    appointmentsCollection.find({}).toArray((err, documents) => {
      if (!err) return res.send(documents);
    });
  });

  app.post("/appointmentsbydate", (req, res) => {
    const date = req.body.date;
    appointmentsCollection.find({ date: date }).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.post("/addadoctor", (req, res) => {
    const file = req.files.file;
    const name = req.body.name;
    const email = req.body.email;
    const filePath = `${__dirname}/doctors/${file.name}`;

    file.mv(filePath, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Failed to upload image");
      }

      const newImg = fs.readFileSync(filePath);
      const encodedImg = newImg.toString("base64");

      const image = {
        contentType: file.mimetype,
        size: file.size,
        img: Buffer.from(encodedImg, "base64"),
      };

      doctorsCollection.insertOne({ name, email, image }).then((result) => {
        fs.unlink(filePath, (err) => {
          if (err) console.log("File remove error", err);
          return res.send(result.insertedCount > 0);
        });
      });
    });
  });
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
