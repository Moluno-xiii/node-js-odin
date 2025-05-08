const { Router } = require("express");
const searchController = require("../controllers/searchController");

const SearchRouter = Router();

SearchRouter.get("/", searchController.searchControllerGet);

module.exports = SearchRouter;
