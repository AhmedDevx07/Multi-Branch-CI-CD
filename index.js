const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Multi-Branch Deployment</h1>
    <p>Environment: <b>${process.env.NODE_ENV || "development"}</b></p>
    <p>Branch: <b>${process.env.BRANCH || "local"}</b></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
