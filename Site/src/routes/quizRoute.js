var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/registrar/:fkUsuario", function (req, res) {
    quizController.registrarDados(req, res);
});

router.post("/puxarTentativaId", function(req, res) {
    quizController.puxarTentativaId(req, res);
});

module.exports = router;