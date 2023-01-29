var solapalinks = document.getElementsByClassName('solapa-links')
var solapacontenidos = document.getElementsByClassName('solapa-contenidos');

function abrirsolapa(solapanombre) {
    for (solapalink of solapalinks) {
        solapalink.classList.remove('link-activo');
    }
    for (solapacontenido of solapacontenidos) {
        solapacontenido.classList.remove('solapa-activa');
    }
    event.currentTarget.classList.add('link-activo');
    document.getElementById(solapanombre).classList.add('solapa-activa');
}