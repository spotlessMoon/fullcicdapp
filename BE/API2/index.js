const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.get('/api/message', (req, res) => {
  res.json({ service: "Node.js", message: "Backend microservice running on Node.js!" });
});

app.listen(8002, () => {
  console.log("Node service running on port 8002");
});

