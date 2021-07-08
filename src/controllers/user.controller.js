const axios = require("axios");

exports.findAll = (req, res) => {
  // call the json placeholder API to get a list of users
  axios.get("https://jsonplaceholder.typicode.com/users").then((apicall) => {
    res.send(apicall.data);
  });
};

exports.findById = (req, res) => {
  // call the json placeholder API to get a list of users by id
  axios
    .get("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.create = (req, res) => {
  axios
    .post("https://jsonplaceholder.typicode.com/users", {
      name: req.body.name,
      username: req.body.username,
      userId: req.body.userId,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.update = (req, res) => {
  axios
    .put("https://jsonplaceholder.typicode.com/users/" + req.params.id, {
      name: req.body.name,
    })
    .then((apicall) => {
      res.send(apicall.data);
    });
};

exports.deleteById = (req, res) => {
  axios
    .delete("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((apicall) => {
      res.send(apicall.data);
    });
};
