/* ----------------------- Conteúdo dos Cartões ----------------------- */

var abrir = document.querySelectorAll(".cartao .botao-mais");
var fechar = document.getElementById("fechar");
var popup = document.getElementById("popup");

// Abre e fecha os pop ups
//Localiza o cartão onde é carregado o botão

abrir.forEach(function (a) {
    a.addEventListener("click", function () {
        popup.style.display = "block";
    });
})

//Cruz para fechar o pop up
fechar.addEventListener("click", function () {
    popup.style.display = "none";
});

/*Escrever no  pop up*/
var cartao1 = document.getElementById("ciencia1");
var cartao2 = document.getElementById("ciencia2");
var cartao3 = document.getElementById("ciencia3");
var cartao4 = document.getElementById("ciencia4");

var titulo = document.getElementById("titulo");
var texto = document.getElementById("informacao");

//Adicionar a cada cartão a informação que lhe corresponde
//Cartão Ciência 1
if (cartao1.addEventListener) {
    cartao1.addEventListener("click", function () {
        titulo.innerText = "O que é o Relógio?";
        texto.innerHTML = "O Relógio do Clima é um gráfico que marca o prazo mais importante de todos: o do Mundo. O tempo nele presente indica a janela temporal disponível para evitarmos que os efeitos mais nefastos relativos ao aquecimento global se tornem irreversíveis. O relógio mostra o tempo restante até esgotarmos o “orçamento de carbono”, ou seja, a quantidade máxima de carbono que se pode queimar de modo a haver 67 % de hipóteses de ficarmos abaixo da marca de 1.5ºC acima da temperatura média anterior à Revolução Industrial. Esta marca corresponde à linha vermelha traçada pelos cientistas, definida como “ponto de não retorno”, ou seja, o ponto a partir do qual começarão a ter lugar mecanismos de retroação positiva que irão perturbar o clima para além da capacidade da intervenção humana.";
    });
}

//Cartão Ciência 2
if (cartao2.addEventListener) {
    cartao2.addEventListener("click", function () {
        titulo.innerText = "De onde vêm os dados em que se baseia o Relógio?";
        texto.innerHTML = "O relógio baseia-se na investigação científica realizada pelos membros do IPCC (Painel Intergovernamental sobre Mudanças Climáticas, do inglês Intergovernmental Panel on Climate Change), a maior autoridade mundial em alterações climáticas e pelo Mercator Research Institute on Global Common and Climate (MCC), um líder mundial em ciência climática e em balanços de carbono.Por sua vez, os cálculos da janela temporal existente baseiam-se nos dados de emissões de carbono globais de 2017, projetados linearmente, e serão atualizados periodicamente.";
    });
}

//Cartão Ciência 3
if (cartao3.addEventListener) {
    cartao3.addEventListener("click", function () {
        titulo.innerText = "Porquê existir o Relógio do Clima?";
        texto.innerHTML = "O relógio pretende consciencializar a população no sentido de serem alterados comportamentos para evitar que seja ultrapassado o ponto de não retorno de 1.5º C no aquecimento global. Desta forma, o relógio irá relembrar, diariamente, o papel individual e coletivo na luta contra as alterações climáticas. É, portanto, urgente que todos façamos a nossa parte!";
    });
}

//Cartão Ciência 4
if (cartao4.addEventListener) {
    cartao4.addEventListener("click", function () {
        titulo.innerText = "O que podemos mudar?";
        texto.innerHTML = "Descrição longa Qualquer mudança nas nossas prioridades e ações atuais podem evitar desastres climáticos e definir o destino do nosso planeta. É necessário agir rápido, em escala e de maneira coordenada, remando todos para o mesmo lado! Desta forma, consoante a nossa atuação, os números presentes no relógio serão alterados e conseguiremos alargar o tempo no relógio. Para tal, é essencial:<br><br>- Reduzir a queima dos combustíveis fósseis; <br>-Atenuar as emissões de gases de estufa;<br>-Aumento o uso de energias renováveis;<br>-Limitar as emissões industriais e os seus resíduos;<br>-Preservação dos mares e oceanos;<br><br>Alterações nas práticas do dia-a-dia são cruciais, tais como:<br>-Ponderação das opções de alimentação (diminuir o consumo decarne);<br>-Aumentar a reutilização (resíduos, roupa, entre outros), gestão de resíduos e reciclagem. Promover a economia circular.<br>-Reduzir a utilização de energia e água;<br>-Reduzir o consumo (plástico, materiais descartáveis, entreoutros);<br>-Plantar árvores;<br>-Transporte sustentável.";
    });
}


