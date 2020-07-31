const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const config = require("./config");
const graphicsMarkupRouter = require("./api/graphics-markup-router");

const PORT = config.PORT || 5000;

// CORS
if (config.CORS_OFF) {
  app.use(cors());
} else {
  app.use(cors({ origin: config.CORS_ORIGIN, credentials: true }));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use("/gm", graphicsMarkupRouter);

// Error Handler
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({ error: err.message });
};
app.use(errorHandler);

// Default endpoint
app.get("/", (req, res) => {
  res.send({ message: "Connected to API" });
});

app.get("/*", function (req, res) {
  res.send({ message: "It seems the page you want to access does not exist!" });
});

app.listen(PORT, function () {
  console.info(`Express server listening on port ${PORT}`);
});
