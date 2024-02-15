"use strict";

// install redis first:
// https://redis.io/

// then:
// $ npm install redis
// $ redis-server

var express = require("express");
var session = require("express-session");

var app = express();

app.use(
  session({
    secret: "your_secret_key_here", // Change this to a secret key for session encryption
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 5 * 1000 }, // Set maxAge to 5 seconds for demonstration
  })
);

// Middleware to track user activity and handle session timeout
app.use((req, res, next) => {
  // If session does not exist or is expired, create a new session
  if (!req.session.lastActivity || Date.now() - req.session.lastActivity > req.session.cookie.maxAge) {
    req.session.lastActivity = Date.now();
    console.log("Session created");
  }

  // If session has timed out, log session timeout
  if (Date.now() - req.session.lastActivity > req.session.cookie.maxAge) {
    console.log("Session timeout");
  }

  next();
});

app.get("/", function (req, res) {
  var body = "";
  if (req.session.views) {
    ++req.session.views;
  } else {
    req.session.views = 1;
    body += "<p>First time visiting? view this page in several browsers :)</p>";
  }
  res.send(
    body + "<p>viewed <strong>" + req.session.views + "</strong> times.</p>"
  );
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke!");
});

app.listen(3500, () => {
  console.log(`Listening on port 3500`);
});
