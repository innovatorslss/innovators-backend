const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Innovators backend is LIVE 🚀");
});

app.post("/login", (req, res) => {
  const { username } = req.body;
  res.json({
    success: true,
    message: `Welcome ${username}`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
