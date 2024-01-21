const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRouter = require("./routes/productRouter")
const wishlistRouter = require("./routes/wishlistRouter")

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("", productRouter);
app.use("", wishlistRouter);


const PORT = process.env.PORT;
const DB = process.env.DB_URL;
mongoose.connect(DB).then(() => console.log("Connected!"));

app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});