module.exports = (app) => {
  const controller = require("../controllers/todo.controller");
  const router = require("express").Router();

  // get all todos
  router.get("/", controller.findAll);

  // get a todo by ID
  router.get("/:id", controller.findById);

  // create a todo
  router.post("/", controller.create);

  // update a todo
  router.put("/:id", controller.update);

  // delete a todo
  router.delete("/:id", controller.deleteById);

  app.use("/api/todo", router);
};
