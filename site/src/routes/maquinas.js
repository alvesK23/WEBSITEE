var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/", function(req, res) {
    maquinasController.testar(req, res);
});

router.get("/maquininha", function(req, res) {
    maquinasController.maquininha(req, res);
});

router.post("/idempresa", function(req, res) {
    maquinasController.idempresa(req, res);
});

router.post("/updateedit", function(req, res) {
    maquinasController.updateedit(req, res);
});

router.post("/registromaquinas", function(req, res) {
    maquinasController.registrarmaquina(req, res);
});

module.exports = router;