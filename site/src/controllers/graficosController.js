var graficosmodal = require("../models/graficosmodal");


function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}


function listarmetricas(req, res) {
    var pegahostname = req.params.hostname;
    graficosmodal.listarmetricas(pegahostname)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function novolimite(req, res) {
    var disco = req.body.disco;
    var cpu = req.body.cpu;
    var memoria = req.body.memoria;
    var temp = req.body.temp;
    var hostname = req.body.hostname;

        graficosmodal.novolimite(disco, cpu, memoria, temp, hostname)
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


module.exports = {
    testar,
    listarmetricas,
    novolimite
}