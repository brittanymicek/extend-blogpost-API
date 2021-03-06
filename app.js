const express = require("express");
const app = express();
app.use(express.json());

// add top-level route handler
app.get("/", function (req, res) {
  res.send("This is the top route in the Blog Post API");
});

// add routes
require("./src/routes/blogposts.route")(app);
require("./src/routes/user.route")(app);
require("./src/routes/todo.route")(app);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
