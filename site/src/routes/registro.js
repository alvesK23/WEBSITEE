var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.get("/", function(req, res) {
    registroController.testar(req, res);
});

router.get("/listar", function(req, res) {
    registroController.listar(req, res);
});

router.post("/fk_empresa", function(req, res) {
    registroController.fk_empresa(req, res);
});

router.delete("/deletarPeloId", function(req, res) {
    registroController.deletarPeloId(req, res);
});



module.exports = router;