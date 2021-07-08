const axios = require("axios");

exports.findALL = (req, res) => {
  // call the json placeholder API to get a list of blog posts
  axios.get("https://jsonplaceholder.typicode.com/posts").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // call the json placeholder API to get a list of blog posts
  axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts/", {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/posts/" + req.params.id, {
      title: req.body.title,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.deleteById = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
