//handles all requests to /api/blogposts endpoint
module.exports = (app) => {
  const router = require("express").Router();
  const controller = require("../controllers/blogposts.controller");

  router.get("/", controller.findALL);

  //GET student by ID
  router.get("/:id", controller.findById);

  // Create a blog post
  router.post("/", controller.create);

  // update an existing blog post
  router.put("/:id", controller.update);

  // delete a blog post
  router.delete("/:id", controller.deleteById);

  app.use("/api/blogposts/", router);
};
