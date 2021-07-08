const axios = require("axios");

exports.findAll = (req, res) => {
  // call the json placeholder API to get a list of todos
  axios.get("https://jsonplaceholder.typicode.com/todos").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // call the json placeholder API to get a list of todos by id
  axios
    .get("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: req.body.title,
      completed: req.body.completed,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/todos/" + req.params.id, {
      title: req.body.title,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.deleteById = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
