var express = require("express");
var router = express.Router();

var centralDeServicosController = require("../controllers/centralDeServicosController");

router.get("/", function(req, res) {
    centralDeServicosController.testar(req, res);
});

router.post("/registrar", function(req, res) {
    centralDeServicosController.registrar(req, res);
});

module.exports = router;