const previaContenedor = document.querySelector('.previa-producto');
const previaCaja = previaContenedor.querySelectorAll('.previa');
document.querySelectorAll('.caja-producto .producto').forEach(producto => {
    producto.onclick =() => {
        previaContenedor.style.display = 'flex';
        let name = producto.getAttribute('data-name');
        previaCaja.forEach(previa => {
           let  target = previa.getAttribute('data-target');
            if (name == target) {
previa.classList.add('active');
            }
        });
    };
});

previaCaja.forEach(close =>{
    close.querySelector('.fa-xmark').onclick = () =>{
      close.classList.remove('active');
      previaContenedor.style.display = 'none';
    };
  });