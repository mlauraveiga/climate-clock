/*-------------HAMBURGUER / MENU-------------*/

var hamburguer = document.getElementById('hamburguer');

var barraMeio = document.getElementById('barraMeio');
var barraBaixo = document.getElementById('barraBaixo');
var barraCima = document.getElementById('barraCima');

var menu = document.getElementById('menu');

//Função que transforma o hamburguer numa cruz e vice versa e que abre e fecha o menu
hamburguer[document.addEventListener ? 'addEventListener' : 'attachEvent']('click', function () {
  //MENU
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';

  //BARRA MEIO
  barraMeio.style.transform =
    barraMeio.style.transform === 'rotate(45deg)' ? 'rotate(0deg)' : 'rotate(45deg)';

  //BARRA BAIXO
  barraBaixo.style.transform =
    barraBaixo.style.transform === 'rotate(-45deg)' ? 'rotate(0deg)' : 'rotate(-45deg)';
  barraBaixo.style.top = barraBaixo.style.top === '50%' ? '96%' : '50%';

  //BARRA CIMA
  barraCima.style.transform =
    barraCima.style.transform === 'rotate(-45deg)' ? 'rotate(0deg)' : 'rotate(-45deg)';
  barraCima.style.top = barraCima.style.top === '50%' ? '0' : '50%';
  barraCima.style.transform = barraCima.style.transform === '0' ? 'translate(0,-50%)' : '0';
});