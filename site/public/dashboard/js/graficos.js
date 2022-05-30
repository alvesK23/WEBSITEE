



testandop = sessionStorage.hostname;
async function getCpu() {

    const urlCpu = `https://callplus.azurewebsites.net/graficos/listarmetricas/${testandop}`;
    const responseCpu = await fetch(urlCpu);
    const datapointsCpu = await responseCpu.json();
    console.log(datapointsCpu);
    return datapointsCpu;
};



function loadCpu() {
    getCpu().then(datapointsCpu => {
        const cpu = [];
        const datahora = [];
        const horascpu = [];
        const nomecpu = [];

        const temp = [];

        const qtd_usomemory = [];
        const qtd_disponivelmemory = [];
        const totalmemory = [];


        const totaldisco = [];
        const qtduso_disco = [];
        const qtddisponivel_disco = [];

        console.log(cpu);
        datapointsCpu.map(x => {
            cpu.push(x.qtd_utilizacao_processador);
            datahora.push(x.datetime_monitora);
            horascpu.push(x.total_horas_ligado);
            nomecpu.push(x.nome_CPU);

            temp.push(x.temperatura);

            qtd_usomemory.push(x.qtd_Em_uso_memoria);
            qtd_disponivelmemory.push(x.qtd_memoria_disponivel);
            totalmemory.push(x.capacidade_total_MEMORY);

            totaldisco.push(x.capacidade_total_DISCO);
            qtduso_disco.push(x.qtd_uso_disco);
            qtddisponivel_disco.push(x.qtd_disco_disponivel);
        });

        nome_processador.innerHTML = nomecpu[nomecpu.length - 1];
        data_hora.innerHTML = horascpu[horascpu.length - 1];
        utilizacaocpu.innerHTML = `${Math.round(cpu[cpu.length - 1])}%`;

        temp_qtd.innerHTML = `${Math.round(temp[temp.length - 1])} C°`;

        porcentagemmemory_utilizacao = (parseInt(qtd_usomemory[qtd_usomemory.length - 1]) * 100) / parseInt(totalmemory[totalmemory.length - 1]);
        porcento_memoria.innerHTML = `${Math.round(porcentagemmemory_utilizacao)}%`;


        porcentagemmemory_disponivel = (parseInt(qtd_disponivelmemory[qtd_disponivelmemory.length - 1]) * 100) / parseInt(totalmemory[totalmemory.length - 1]);
        porcentagen_memoria_d.innerHTML = `${Math.round(porcentagemmemory_disponivel)}%`;


        porcentagemdisco_utilizacao = (parseInt(qtduso_disco[qtduso_disco.length - 1]) * 100) / parseInt(totaldisco[totaldisco.length - 1]);
        porcentodisco.innerHTML = `${Math.round(porcentagemdisco_utilizacao)}%`;

        porcentagemdisco_disponivel = (parseInt(qtddisponivel_disco[qtddisponivel_disco.length - 1]) * 100) / parseInt(totaldisco[totaldisco.length - 1]);
        porcentagemdisponiveldisc.innerHTML = `${Math.round(porcentagemdisco_disponivel)}%`;

        totalds.innerHTML = `${parseInt(totaldisco[totaldisco.length - 1])} GB`;

        total_memoria.innerHTML = `${parseInt(totalmemory[totalmemory.length - 1])} GB`;

        var ctxCpu = document.getElementById('myChartProcess').getContext('2d');     //cpu
        myChartCpu = new Chart(ctxCpu, {
            type: "line",
            data: {
                labels: datahora,
                datasets: [
                    {
                        label: nomecpu[nomecpu.length - 1],
                        data: cpu,
                        backgroundColor: ["#2196F3", "#a0a0a0"],
                        borderColor: "rgba(255, 159, 64, 1)"
                    }
                ]
            },
            options: {
                maintainAspectRatio: false
            }

        });


        var ctxtemp = document.getElementById('myChartTemp').getContext('2d');  //temp
        myChartTemp = new Chart(ctxtemp, {
            type: "line",
            data: {
                labels: ['d', 'd', 'd', 'd', 'd'],
                datasets: [
                    {
                        label: 'Temperatura',
                        data: temp,
                        backgroundColor: ["#2196F3", "#a0a0a0"],
                        borderColor: "rgba(255, 159, 64, 1)"
                    }
                ]
            },
            options: {
                maintainAspectRatio: false
            }

        });


        var ctxMemory = document.getElementById('myChartM').getContext('2d');  //memory
        myChartM = new Chart(ctxMemory, {
            type: "doughnut",
            data: {
                labels: [
                    'Espaço usado',
                    'Espaço livre'
                ],
                datasets: [
                    {
                        label: 'Temperatura',
                        data: [parseInt(qtd_usomemory[qtd_usomemory.length - 1]), parseInt(qtd_disponivelmemory[qtd_disponivelmemory.length - 1])],
                        backgroundColor: ["#008000", "#a0a0a0"],
                        borderColor: "transparent"
                    }
                ]
            },
            options: {
                maintainAspectRatio: false
            }

        });



        var ctxdisco = document.getElementById('myChartdisco').getContext('2d');  //memory
        myChartdisco = new Chart(ctxdisco, {
            type: "doughnut",
            data: {
                labels: [
                    'Espaço usado',
                    'Espaço livre'
                ],
                datasets: [
                    {
                        label: 'Temperatura',
                        data: [parseInt(qtduso_disco[qtduso_disco.length - 1]), parseInt(qtddisponivel_disco[qtddisponivel_disco.length - 1])],
                        backgroundColor: ["#2196F3", "#a0a0a0"],
                        borderColor: "transparent"
                    }
                ]
            },
            options: {
                maintainAspectRatio: false
            }

        });


    });

}


loadCpu();
setInterval(() => {
    if (myChartCpu != null) {
        myChartCpu.destroy();
    }

    if (myChartTemp != null) {
        myChartTemp.destroy();
    }

    if (myChartM != null) {
        myChartM.destroy();
    }

    if (myChartdisco != null) {
        myChartdisco.destroy();
    }


    loadCpu();
    console.log('????');
}, 5000);
