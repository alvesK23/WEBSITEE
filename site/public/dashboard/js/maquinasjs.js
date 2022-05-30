var countid = 0;


function testeeee() {

    var empresafuncionario = sessionStorage.FK_EMPRESA;
    fetch("/maquinas/idempresa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            empresa: empresafuncionario,

        })
    }).then
    fetch("/maquinas/maquininha").then(function (res) {
        res.json().then(function (json) {
            console.log(json);
            var id = [];
            var hostname = [];
            var setor = [];
            var alerta = [];
            var varideal = 0;
            var varalerta = 0;
            var varcritico = 0;
            var bolinha;
            for (let index = 0; index < json.length; index++) {
                id.push(json[index].ID);
                countid = json[index].COUNTID;
                hostname.push(json[index].HOSTNAME);
                setor.push(json[index].SETOR);
                alerta.push(json[index].ALERTA);
            }

            for (var i = 0; i < hostname.length; i++) {


                if (alerta[i] == "Normal") {
                    varideal = varideal + 1
                    ideal.innerHTML = varideal;
                    bolinha = "bolinha1";
                }

                if (alerta[i] == "Alerta") {
                    varalerta = varalerta + 1
                    alertinha.innerHTML = varalerta;
                    bolinha = "bolinha2";
                }

                if (alerta[i] == "Critico") {
                    varcritico = varcritico + 1
                    critico.innerHTML = varcritico;
                    bolinha = "bolinha3";
                }


                registromaquina.innerHTML = `
                <div id="novamaquina" class="editar">
                <div class="popup">
                    <h2>Nova máquina</h2><br>
                    <div class="content">
                        <section>
                        
             <div class="ajeitainput">
                        Setor:  <input id="varsetorR" class="inputedit" placeholder="Setor" > 
                        Hostname: <input id="varhostnameE" class="inputedit" placeholder="Hostname">  
        
                        
        
                        <button class="btnedit" onclick="registrarmaquina(varsetorR.value,varhostnameE.value)">REGISTRAR</button>
                    </div>
        
                    </section>
                    <a class="close" href="#">&times;</a>
                </div>
                </div>
                `;

                maquinas_on.innerHTML += `
                <div class="linha1">
                        <div class="${bolinha}"></div>
                        <div>Computador <span>Nº${i + 1}  ${hostname[i]}            </span></div>

                        <div class="linhabtn"><button class="btn__liinha"
                                onclick="acessagrafico('${hostname[i]}')">ACESSAR</button>
                            <button onclick="window.location.href ='inicio.html#${i + 1}'">EDITAR</button>
                        </div>
                    </div> `;

                editando.innerHTML += `
                    <div id="${i + 1}" class="editar">
                    <div class="popup">
                        <h2>Hostname: ${hostname[i]}</h2><br>
                        <div class="content">
                            <section>
                            
                 <div class="ajeitainput">
                            Setor:  <input id="idedit_setor${i}" class="inputedit" placeholder="${setor[i]}" > 
                            Status: <input id="idedit_status${i}" class="inputedit" placeholder="${alerta[i]}">  
                            

                            <button class="btnedit" onclick="updateedit(idedit_setor${i}.value,idedit_status${i}.value,'${hostname[i]}')">SALVAR</button>
                        </div>

                        </section>
                        <a class="close" href="#">&times;</a>
                    </div>
                    </div>
                `;
            }
        })
    }).catch(function (erro) {
        console.log(erro);
    })
}



function updateedit(varsetor, varstatus, varhostname) {

    if (varsetor == null || varsetor == "" || varstatus == null || varstatus == "") {
        alert('Não salve caracteristicas vazias.');
    } else {
        if (varstatus != "Normal" && varstatus != "Alerta" && varstatus != "Critico") {
            alert('Favor informar para status os valores entre: Normal, Alerta, Critico');
        } else {
            fetch("/maquinas/updateedit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    setor: varsetor,
                    status: varstatus,
                    hostname: varhostname,
                })
            }).then(function (resposta) {
                console.log("resposta: ", resposta);
                if (resposta.ok) {
                    window.alert("Salvo com sucesso!");
                    window.location = "inicio.html";
                } else {
                    throw ("Houve um erro ao tentar realizar o cadastro!");
                }
            }).catch(function (resposta) {
                console.log();

            });
        }
    }

};


function registrarmaquina(varsetor, varhostname) {

    if (varsetor == null || varsetor == "") {
        alert('Não salve caracteristicas vazias.');
    } else {

        fetch("/maquinas/registromaquinas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                setor: varsetor,
                hostname: varhostname,
            })
        }).then(function (resposta) {
            console.log("resposta: ", resposta);
            if (resposta.ok) {
                window.alert("Salvo com sucesso!");
                window.location = "inicio.html";
            } else {
                throw ("Houve um erro ao tentar realizar o cadastro!");
            }
        }).catch(function (resposta) {
            console.log();

        });
    }
};

//var graficoss = require("./graficos");//



