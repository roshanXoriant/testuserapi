const express = require("express");
const users = require("./database/UserData.json");

// Set up the express app
const app = express();

// get all users
app.get("/api/v1/getAllUsers", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Users list",
    users: users
  });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
