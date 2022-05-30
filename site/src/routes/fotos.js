var express = require("express");
var router = express.Router();

var fotosController = require("../controllers/fotosController");


router.get("/", function (req, res) {
    fotosController.testar(req, res);
});

router.post("/inserindoft", function (req, res) {
    fotosController.inserindoft(req, res);
});

router.post("/matricula", function (req, res) {
    fotosController.matricula(req, res);
});

router.get("/pegandofotolink", function (req, res) {
    fotosController.pegandofotolink(req, res);
});

module.exports = router;