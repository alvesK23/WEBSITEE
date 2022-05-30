var database = require("../database/config")



function listarmetricas(pegahostname) {
    var instrucao = `select top 5* from registro join monitoramento on fkMonitoramento = monitoramento.id
    join componentes on fkComponentes = componentes.id 
    join computador on fkComputador = computador.id
    WHERE monitoramento.hostname = '${pegahostname}' 
    and fkComputador = (select id from computador where hostname = '${pegahostname}')
        order by datetime_monitora desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function novolimite(disco, cpu, memoria, temp, hostname) {
    var instrucao = ` insert into limite values ('${disco}','${cpu}','${memoria}','${temp}');`;
    console.log("Executando a instrução SQL: \n" + instrucao);

    

    return database.executar(instrucao)  , updatelimite(hostname);;
}

function updatelimite(hostname) {
    var instrucao = ` update componentes set fkLimite = (select top 1 id from limite order by id desc) 
    where fkComputador = (select id from computador where hostname = '${hostname}');  `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listarmetricas,
    novolimite
};