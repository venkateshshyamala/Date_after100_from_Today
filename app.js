const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  let date = new Date();
  let updateTime = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${updateTime.getDate()}/${
      updateTime.getMonth() + 1
    }/${updateTime.getFullYear()}`
  );
});

module.exports = app;
