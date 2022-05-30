var centralDeServicosModel = require("../models/centralDeServicosModel");

function testar(req, res) {
    console.log("ENTRAMOS NA centralDeServicosModel");
    res.json("ESTAMOS FUNCIONANDO!");
}

function registrar(req, res) {
    var matricula = req.body.matricula;
    var idproblema = req.body.idproblema;
    var data = req.body.data;
    var solucao = req.body.solucao;

    if (matricula == undefined) {
        res.status(400).send("Sua matricula está undefined!");
    } else if (idproblema == undefined) {
        res.status(400).send("idproblema está undefined!");
    } else if (data == undefined) {
        res.status(400).send("data está undefined!");
    } else if (solucao == undefined) {
        res.status(400).send("Sua solução está undefined!");
    } else {
        centralDeServicosModel.registrar(matricula, idproblema, data, solucao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    testar,
    registrar
}