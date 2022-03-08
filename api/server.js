const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

app.use(cors());

app.use(bodyParser.json());

app.post("/endpoint", async (req, res) => {
  if (req.body == {}) {
    res.status(404).json("No data available");
  }
  var jsonContent = await JSON.stringify(req.body);

  fs.writeFile(`krakend.json`, jsonContent, "utf8", function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return res.json(err);
    }
    res.json("JSON file has been saved.");
  });
});

app.get("/download", function (req, res) {
  try {
    const file = `krakend.json`;
    res.download(file); // Set disposition and send it.
  } catch (error) {
    console.error(error);
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
