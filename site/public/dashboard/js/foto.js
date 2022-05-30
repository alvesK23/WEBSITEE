function newft() {

    //https://i.imgur.com/DMF6lT2.png

    var fotoperfilusuario = sessionStorage.FOTOPERFIL_USER;
    
    let fotoaqui = document.getElementById('fotoaqui');
    fotoaqui.style.backgroundImage = `url("${fotoperfilusuario}")`;



    foto.innerHTML = `<div id="editandoft" class="editar">
    <div class="popup">
        <h2>Nova Foto:</h2><br>
        <div class="content">
            <section>       
    <div class="ajeitainput">
           Nova Foto:  <input  id="input_link_foto" class="inputedit" placeholder="  insira o link da foto" > 
            <button class="btnedit" onclick="inserindoFto()">SALVAR</button>
        </div>
        </section>
        <a class="close" href="#">&times;</a>
    </div>
    </div>`;
}

function inserindoFto() {
    var varmatricula = sessionStorage.MATRICULA_USUARIO;
    var varlinkfoto = input_link_foto.value;
    fetch("/fotos/inserindoft", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            matricula: varmatricula,
            linkfoto: varlinkfoto,
        })
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        if (resposta.ok) {
            window.alert("Foto inserida com sucesso! , relogue para alterção");
            //window.location = "inicio.html";
            $('#fotoaqui').load(location.href + " #fotoaqui");
        } else {
            throw ("Houve um erro ao inserir a foto");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}