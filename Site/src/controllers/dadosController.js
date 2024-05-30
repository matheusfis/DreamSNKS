var dadosModel = require("../models/dadosModel");

function obterMediaAcertosUsuario(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.mediaAcertosUsuario(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a média de acertos do usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterMediaAcertosUsuarios(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.mediaAcertosUsuarios(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a média de acertos dos outros usuários:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterMaxPontuacaoUsuario(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.maxPontuacaoUsuario(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a maior pontuação do usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterMaxPontuacaoUsuarios(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.maxPontuacaoUsuarios(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar a maior pontuação dos outros usuários:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterTentativasAcertosErros(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.tentativasAcertosErros(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar tentativas, acertos e erros do usuário:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function obterTentativasAcertosErrosUsuarios(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    dadosModel.tentativasAcertosErrosUsuarios(fkUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            console.log("Erro ao puxar tentativas, acertos e erros dos outros usuários:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterMediaAcertosUsuario,
    obterMediaAcertosUsuarios,
    obterMaxPontuacaoUsuario,
    obterMaxPontuacaoUsuarios,
    obterTentativasAcertosErros,
    obterTentativasAcertosErrosUsuarios
};
