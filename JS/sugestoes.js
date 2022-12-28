/* ------------------------------------ MARCAS ------------------------------------ */

var abreCartao = document.querySelectorAll('.botao-marca');
var cartao = document.getElementsByClassName('cartao-marca');

var cartao1 = document.getElementById('LIAME');
var cartao2 = document.getElementById('EcoX');
var cartao3 = document.getElementById('Too Good To Go');
var cartao4 = document.getElementById('MALU Ecoshop');
var cartao5 = document.getElementById('Mind the Trash');
var cartao6 = document.getElementById('Georganics');
var cartao7 = document.getElementById('BioEscolha');

var titulo = document.getElementById('nome-marca');
var texto = document.getElementById('texto-marca');
var botao = document.getElementById('botao');

cartao1.style.backgroundColor = 'rgba(139, 190, 86, 1)';

if (cartao1.addEventListener) {
  cartao1.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao1.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'LIAME';
    texto.innerHTML =
      'Os sacos LIAME são a alternativa perfeita face ao uso de sacos de plástico e são feitos com algodão 100% orgânico.';
    botao.setAttribute('href', 'https://liame-bags.myshopify.com');
  });
}

if (cartao2.addEventListener) {
  cartao2.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao2.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'EcoX';
    texto.innerHTML =
      'A EcoXperience, ou simplesmente EcoX, é uma empresa de Coimbra que desenvolve e comercializa detergentes ecológicos inovadores assentes na economia circular, a partir de óleo alimentar usado como matéria prima, reutilizando assim um dos resíduos mais poluentes para os ecossistemas.';
    botao.setAttribute('href', 'https://ecox.pt');
  });
}

if (cartao3.addEventListener) {
  cartao3.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao3.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'Too Good To Go';
    texto.innerHTML =
      'A Too Good To Go sonha e luta com um planeta sem desperdício alimentar. Na app da Too Good To Go é possível comprar comida que iria ser desperdiçada em estabelecimentos perto de nós. Esta iniciativa chegou a Coimbra em 2020, e já cerca de 60 estabelecimentos podem ser encontrados na app.';
    botao.setAttribute('href', 'https://toogoodtogo.pt/pt');
  });
}

if (cartao4.addEventListener) {
  cartao4.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao4.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'MALU Ecoshop';
    texto.innerHTML =
      'A MALU ecoshop é uma loja online de produtos  ecológicos e sustentáveis, maioritariamente vegan, inseridos num estilo de vida “desperdício zero”. Procuram que os seus produtos sejam produzidos a partir de matérias primas naturais e biodegradáveis, através de técnicas artesanais ou com um impacto reduzido no ambiente.';
    botao.setAttribute('href', 'https://malu-ecoshop.pt');
  });
}

if (cartao5.addEventListener) {
  cartao5.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao5.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'Mind the Trash';
    texto.innerHTML =
      'A Mind The Trash é uma loja multimarcas on-line. Com o lema desperdício zero, vende vários produtos alternativos aos tradicionais, tendo ainda a sua própria marca que produz, entre outros, champôs sólidos e pensos menstruais reutilizáveis. Para além disso, possui ainda um blog associado e uma conta de Instagram onde partilham regularmente sugestões para um estilo de vida mais sustentável.';
    botao.setAttribute('href', 'https://mindthetrash.pt');
  });
}

if (cartao6.addEventListener) {
  cartao6.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao6.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'Georganics';
    texto.innerHTML =
      'A Georganics é uma marca de higiene oral britânica, com a missão de ajudar a população a viver de forma mais sustentável. Para isso, criaram produtos que não só são ótimos para quem os utiliza, como também o são para o ambiente. De entre a sua gama, destacam-se as pastilhas de pasta de dentes e o sabão dentário.';
    botao.setAttribute('href', 'https://georganics.com');
  });
}

if (cartao7.addEventListener) {
  cartao7.addEventListener('click', function () {
    abreCartao.forEach(function (bot) {
      bot.style.backgroundColor = 'rgba(139, 190, 86, 0.4)';
    });

    cartao7.style.backgroundColor = 'rgba(139, 190, 86, 1)';

    titulo.innerText = 'BioEscolha';
    texto.innerHTML =
      'BioEscolha é um mercado e restaurante 100% biológicos, situado no centro de Celas, em Coimbra. Têm disponíveis produtos vegan, vegetarianos, s/ glúten, s/ açúcar, s/ lactose, macrobiótica.';
    botao.setAttribute('href', 'https://bioescolha.pt');
  });
}
