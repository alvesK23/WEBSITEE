var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");


router.get("/", function(req, res) {
    graficosController.testar(req, res);
});

router.get("/listarmetricas/:hostname", function (req, res) {
    graficosController.listarmetricas(req, res);
});

router.post("/novolimite", function (req, res) {
    graficosController.novolimite(req, res);
});

module.exports = router;