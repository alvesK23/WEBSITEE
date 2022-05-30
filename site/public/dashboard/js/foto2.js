
var fotoperfilusuario = sessionStorage.FOTOPERFIL_USER;


function fotocarrega() {
    let fotoaqui = document.getElementById('fotoaqui');
    fotoaqui.style.backgroundImage = `url("${fotoperfilusuario}")`;

}
