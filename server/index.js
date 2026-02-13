const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/tickets", async (req, res) => {
  try {
    const { name, issue_title, description, category, email } = req.body;

    const newTicket = await pool.query(
      `INSERT INTO tickets (name, issue_title, description, category, email)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, issue_title, description, category, email]
    );

    res.json(newTicket.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
