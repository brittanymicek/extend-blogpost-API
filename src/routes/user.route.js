module.exports = (app) => {
  const controller = require("../controllers/user.controller");
  const router = require("express").Router();

  // get all users
  router.get("/", controller.findAll);

  // get a user by ID
  router.get("/:id", controller.findById);

  // create a user
  router.post("/", controller.create);

  // update a user
  router.put("/:id", controller.update);

  // delete a user
  router.delete("/:id", controller.deleteById);

  app.use("/api/user", router);
};
