const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// app.use("/", require("./routes/auth"));
// app.use("/", require("./routes/userDetails"));

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
