import dicaSaudavelData from './dicas_saudaveis_info_array.json' assert {type : 'json'};

// JS dos artigos

function mostrarArtigo(botao, artigo){
    if (artigo.style.display === 'block') {
        artigo.style.display = 'none';
        botao.innerHTML = 'Ver Mais';
    } else {
        artigo.style.display = 'block';
        botao.innerHTML = 'Ver Menos';
    }
}

let primeiroArtigo = document.getElementById('primeiroArtigo');
let primeiroBotao = document.getElementById('primeiroBotao');
primeiroBotao.addEventListener('click', ()=>{
    mostrarArtigo(primeiroBotao, primeiroArtigo)
});


let segundoArtigo = document.getElementById('segundoArtigo');
let segundoBotao = document.getElementById('segundoBotao');
segundoBotao.addEventListener('click', ()=>{
    mostrarArtigo(segundoBotao, segundoArtigo)
});

let terceiroArtigo = document.getElementById('terceiroArtigo');
let terceiroBotao = document.getElementById('terceiroBotao');
terceiroBotao.addEventListener('click', ()=>{
    mostrarArtigo(terceiroBotao, terceiroArtigo)
});

let quartoArtigo = document.getElementById('quartoArtigo');
let quartoBotao = document.getElementById('quartoBotao');
quartoBotao.addEventListener('click', ()=>{
    mostrarArtigo(quartoBotao, quartoArtigo)
});

let quintoArtigo = document.getElementById('quintoArtigo');
let quintoBotao = document.getElementById('quintoBotao');
quintoBotao.addEventListener('click', ()=>{
    mostrarArtigo(quintoBotao, quintoArtigo)
});



// JS do Carrossel
let carrosselDiv = document.querySelector('.carousel');

for (let i = 0; i < dicaSaudavelData.pratos.length; i++){
    let imagensCarrossel = document.createElement('div');
    imagensCarrossel.classList.add('carousel-cell');    
    imagensCarrossel.innerHTML = `
    <img src="${dicaSaudavelData.pratos[i].diretorioImg}" alt="${dicaSaudavelData.pratos[i].altImg}">
    <div class="nome-prato"><p>${dicaSaudavelData.pratos[i].pratoNome}</p></div>
    <div class="estrelas-pratos">&starf; &starf; &starf; &starf; &starf;</div>
    <div class="descricao-prato"><p>${dicaSaudavelData.pratos[i].descricaoPrato}</p></div>
    <div class="valor-carrinho">
        <div class="valor-prato">${dicaSaudavelData.pratos[i].valorPrato}</div>
        <button class="adiconar-carrinho" id="${dicaSaudavelData.pratos[i].id}">Adicionar</button>
    </div>
    `
    carrosselDiv.appendChild(imagensCarrossel);
};


// JS do botão 'adicionar'

// Captura a div vazia
let avisoCarrinho = document.getElementById("avisoCarrinho");

// Coloca no nome do prato na div vazia junto com uma mensagem
function mostrarAviso (nomePrato){
    avisoCarrinho.innerHTML = `<p>${nomePrato} adicionado no carrinho</p>`
    avisoCarrinho.style.display = 'block';

    setTimeout(() => {
        avisoCarrinho.style.display = 'none';
    }, 5000);
}

let boloBanana = document.getElementById("boloBanana");
boloBanana.addEventListener('click', ()=>{
    mostrarAviso("Bolo de banana")    
})

let frangoGrelhado = document.getElementById("frangoGrelhado");
frangoGrelhado.addEventListener('click', ()=>{
    mostrarAviso("Frango Grelhado")
})

let muesli = document.getElementById("muesli");
muesli.addEventListener('click', ()=>{
    mostrarAviso("Muesli")
})

let salmãoGrelhado = document.getElementById("salmãoGrelhado");
salmãoGrelhado.addEventListener('click', ()=>{
    mostrarAviso("Salmão Grelhado")
})

let Smoothies = document.getElementById("smoothies");
smoothies.addEventListener('click', ()=>{
    mostrarAviso("Smoothies")
})

let penne = document.getElementById("penne");
penne.addEventListener('click', ()=>{
    mostrarAviso("Penne all'arrabbiata")
})