const { Router } = require("express");
const {
  sort_by_entity,
  filter_by_location,
  filter_by_page,
} = require("../database/data/table-operations");
const data = require("../database/mocks/wirewax-data");
const router = new Router();

const ENTITY_NAME = "GRAPHICS_MARKUP";

router.get("/", (req, res) => {
  return res.json({ message: `"Wirewax API" - ${ENTITY_NAME}` });
});

router.get("/by-page", (req, res) => {
  data.splice(10);
  const { page, rowsPerPage, orderedName, orientation, location } = req.query;
  let newArray = [...data];

  if (location) {
    newArray = filter_by_location(newArray, location);
  }

  if (orderedName && orientation) {
    newArray = sort_by_entity(newArray, orderedName, orientation);
  }

  const pageData = filter_by_page(
    newArray,
    parseInt(page),
    parseInt(rowsPerPage)
  );

  return res.json({
    table: pageData,
    maxPage: Math.ceil(data.length / rowsPerPage),
  });
});

module.exports = router;
