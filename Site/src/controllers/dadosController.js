var dadosModel = require("../models/dadosModel");

function puxarMaxAcertos(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    console.log(`Puxando os dados`);

    dadosModel.puxarMaxAcertos(fkUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao puxar dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function puxarMaxTentativas(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    console.log(`Puxando os dados`);

    dadosModel.puxarMaxTentativas(fkUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao puxar dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function puxarTentativasAcertos(req, res) {
    var fkUsuario = req.body.idUsuarioServer;

    console.log(`Puxando os dados`);

    dadosModel.puxarTentativasAcertos(fkUsuario)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao puxar dados.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}



module.exports = {
    puxarMaxAcertos,
    puxarMaxTentativas,
    puxarTentativasAcertos
}