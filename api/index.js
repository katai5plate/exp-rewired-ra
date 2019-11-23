const express = require("express");
const cors = require("cors");

const App = require("./App");

new App({
  port: 3333,
  data: {
    cpus: require("os")
      .cpus()
      .map((item, index) => ({ ...item, id: index })),
    rand: new Array(300).fill().map((_, id) => ({
      id,
      "10": Math.random() * 10,
      "100": Math.random() * 100,
      "1000": Math.random() * 1000,
      "10000": Math.random() * 10000
    }))
  },
  use: _ => [
    express.json(),
    express.urlencoded({ extended: true }),
    cors(),
    (_, res, next) => {
      res.setHeader("Access-Control-Expose-Headers", [
        "X-Total-Count"
        // "Content-Range"
      ]);
      next();
    }
  ],
  listen: that => () => {
    console.log(`Example app listening on port ${that.config.port}`);
    console.log(`http://localhost:${that.config.port}/`);
  },
  route: {
    "/": {
      get: that => (req, res) => {
        console.log("/", req.params, req.query);
        res.send(Object.keys(that.config.route));
      }
    },
    "/cpus": {
      get: that => (req, res) => {
        console.log("GET_LIST", req.params, req.query);
        const dataName = "cpus";
        const { _order, _sort, _start, _end } = req.query;
        res.setHeader("X-Total-Count", that.getAllDataLength(dataName));
        res.send(that.getData(dataName, _order, _sort, ".", _start, _end));
      }
    },
    "/cpus/:id": {
      get: that => (req, res) => {
        console.log("GET_ONE", req.params, req.query);
        res.send(that.getDataOne("cpus", req.params.id));
      }
    },
    "/rand": {
      get: that => (req, res) => {
        console.log("GET_LIST", req.params, req.query);
        const dataName = "rand";
        const { _order, _sort, _start, _end } = req.query;
        res.setHeader("X-Total-Count", that.getAllDataLength(dataName));
        res.send(that.getData(dataName, _order, _sort, ".", _start, _end));
      }
    },
    "/rand/:id": {
      get: that => (req, res) => {
        console.log("GET_ONE", req.params, req.query);
        res.send(that.getDataOne("rand", req.params.id));
      }
    }
  }
});
