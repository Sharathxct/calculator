const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

// Sum
app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  console.log(req.body)
  console.log(a, b)
  const sum = parseInt(a) + parseInt(b)
  console.log("sum isssssssss", sum)
  if (!a || !b) {
    res.status(403).json({ message: "wrong inputs" });
  }
  res.json({ data: sum });
})
// Multiply
app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(403).json({ message: "wrong inputs" });
  }
  res.json({ data: parseInt(a) * parseInt(b) });
})

// Divide
app.post('/divide', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(403).json({ message: "wrong inputs" });
  }
  res.json({ data: parseInt(a) / parseInt(b) });
})

// Substract
app.post('/substract', (req, res) => {
  const { a, b } = req.body;
  if (!a || !b) {
    res.status(403).json({ message: "wrong inputs" });
  }
  res.json({ data: parseInt(a) - parseInt(b) });
})

app.listen(3000, () => {
  console.log("Server listening on port 3000")
})
