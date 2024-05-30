var express = require("express");
var router = express.Router();

var dadosController = require("../controllers/dadosController");

router.post("/mediaAcertosUsuario", function(req, res) {
    dadosController.obterMediaAcertosUsuario(req, res);
});

router.post("/mediaAcertosUsuarios", function(req, res) {
    dadosController.obterMediaAcertosUsuarios(req, res);
});

router.post("/maxPontuacaoUsuario", function(req, res) {
    dadosController.obterMaxPontuacaoUsuario(req, res);
});

router.post("/maxPontuacaoUsuarios", function(req, res) {
    dadosController.obterMaxPontuacaoUsuarios(req, res);
});

router.post("/tentativasAcertosErros", function(req, res) {
    dadosController.obterTentativasAcertosErros(req, res);
});

router.post("/tentativasAcertosErrosUsuarios", function(req, res) {
    dadosController.obterTentativasAcertosErrosUsuarios(req, res);
});

module.exports = router;
