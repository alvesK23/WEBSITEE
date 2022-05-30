var database = require("../database/config")

function registrar(matricula, idproblema, data, solucao) {
    console.log("ACESSEI O CENTRAL DE SERVIÇOS MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrar()",matricula, idproblema, data, solucao);
    var instrucao = `UPDATE Alerta_problema SET matricula = '${matricula}', fim_problema = '${data}', solucao = '${solucao}' WHERE id = ${idproblema};`;
    return database.executar(instrucao);
}

module.exports = {
    registrar
};