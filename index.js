const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./queries");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// app.get("/", (req, res) => {
//   res.json({ info: "Node.js, Express, and Postgres API" });
// });

app.get("/professors", db.getProfessors);
app.get("/professors/:id", db.getProfessorById);
app.post("/professors", db.createProfessor);
app.put("/professors/:id", db.updateProfessor);
app.delete("/professors/:id", db.deleteProfessor);

app.get("/reviews", db.getReviews);
app.get("/reviews/:id", db.getReviewById);
app.post("/reviews", db.createReview);
app.put("/reviews/:id", db.updateReview);
app.delete("/reviews/:id", db.deleteReview);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
