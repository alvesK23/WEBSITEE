var database = require("../database/config")

function maquininha(empresafuncionario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select id  as ID, hostname as HOSTNAME , setor as SETOR , status_alerta as ALERTA from computador where fkEmpresa = ${empresafuncionario};     `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function updateedit(setor, status, hostname) {
    var instrucao = `
    update computador  set setor = '${setor}' where hostname = '${hostname}';`;
   
    console.log("Executando a instrução SQL: \n" + instrucao);
    
    updateedit2(status, hostname);

    return database.executar(instrucao);
}
function updateedit2(status, hostname) {
    var instrucao = `
    update computador  set status_alerta = '${status}' where hostname = '${hostname}';`;
   
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

function registrarmaquina(setor, status,hostname, empresafuncionario) {
    var instrucao = `
    insert into computador (setor,status_alerta,hostname,fkEmpresa) values('${setor}','${status}','${hostname}',${empresafuncionario});`;
   
    console.log("Executando a instrução SQL: \n" + instrucao);

    return database.executar(instrucao);
}

module.exports = {
    maquininha,
    updateedit,
    registrarmaquina,
};