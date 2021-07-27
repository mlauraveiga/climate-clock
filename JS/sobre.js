/* ------------------------------ Botões Equipa ------------------------------ */

var carregaDepartamento = document.querySelectorAll('.departamento');

//Botão correspondente a cada departamento
var dep1 = document.getElementById('dep1');
var dep2 = document.getElementById('dep2');
var dep3 = document.getElementById('dep3');
var dep4 = document.getElementById('dep4');
var dep5 = document.getElementById('dep5');
var dep6 = document.getElementById('dep6');
var dep7 = document.getElementById('dep7');

//elemento da equipa correspondente a cada dapartamento

var elem = document.querySelectorAll('.elemento');

var direcao = document.querySelectorAll('.elemento.direcao');
var coordIntRelExt = document.querySelectorAll('.elemento.coor-interna-rel-externas');
var ciencia = document.querySelectorAll('.elemento.ciencia');
var traducao = document.querySelectorAll('.elemento.traducao');
var dev = document.querySelectorAll('.elemento.dev');
var comunicacao = document.querySelectorAll('.elemento.comunicacao');
var imagem = document.querySelectorAll('.elemento.imagem');

console.log(direcao);

carregaDepartamento.forEach(function (car) {
  car.style.background = 'rgba(235, 51, 35, 0.4)';
});

elem.forEach(function (el) {
  el.style.display = 'none';
});

dep1.style.background = '#eb3323';

direcao.forEach(function (dir) {
  dir.style.display = 'block';
});

if (dep1.addEventListener) {
  dep1.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep1.style.background = '#eb3323';

    direcao.forEach(function (dir) {
      dir.style.display = 'block';
    });
  });
}

if (dep2.addEventListener) {
  dep2.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep2.style.background = '#eb3323';

    coordIntRelExt.forEach(function (coor) {
      coor.style.display = 'block';
    });
  });
}

if (dep3.addEventListener) {
  dep3.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep3.style.background = '#eb3323';

    ciencia.forEach(function (cien) {
      cien.style.display = 'block';
    });
  });
}

if (dep4.addEventListener) {
  dep4.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep4.style.background = '#eb3323';

    traducao.forEach(function (trad) {
      trad.style.display = 'block';
    });
  });
}

if (dep5.addEventListener) {
  dep5.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep5.style.background = '#eb3323';

    dev.forEach(function (d) {
      d.style.display = 'block';
    });
  });
}

if (dep6.addEventListener) {
  dep6.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep6.style.background = '#eb3323';
    comunicacao.forEach(function (com) {
      com.style.display = 'block';
    });
  });
}

if (dep7.addEventListener) {
  dep7.addEventListener('click', function () {
    carregaDepartamento.forEach(function (car) {
      car.style.background = 'rgba(235, 51, 35, 0.4)';
    });

    elem.forEach(function (el) {
      el.style.display = 'none';
    });

    dep7.style.background = '#eb3323';
    imagem.forEach(function (ima) {
      ima.style.display = 'block';
    });
  });
}
