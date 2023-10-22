let primeiroArtigo = document.getElementById('primeiroArtigo');
let primeiroBotao = document.getElementById('primeiroBotao');
primeiroBotao.addEventListener('click', function(){
    if (primeiroArtigo.style.display === 'none') {
        primeiroArtigo.style.display = 'block';
        primeiroBotao.innerHTML = 'Ver Menos';
    } else {
        primeiroArtigo.style.display = 'none';
        primeiroBotao.innerHTML = 'Ver Mais';
    }
})

let segundoArtigo = document.getElementById('segundoArtigo');
let segundoBotao = document.getElementById('segundoBotao');
segundoBotao.addEventListener('click', function(){
    if (segundoArtigo.style.display === 'none') {
        segundoArtigo.style.display = 'block';
        segundoBotao.innerHTML = 'Ver Menos';
    } else {
        segundoArtigo.style.display = 'none';
        segundoBotao.innerHTML = 'Ver Mais';
    }
})

let terceiroArtigo = document.getElementById('terceiroArtigo');
let terceiroBotao = document.getElementById('terceiroBotao');
terceiroBotao.addEventListener('click', function(){
    if (terceiroArtigo.style.display === 'none') {
        terceiroArtigo.style.display = 'block';
        terceiroBotao.innerHTML = 'Ver Menos';
    } else {
        terceiroArtigo.style.display = 'none';
        terceiroBotao.innerHTML = 'Ver Mais';
    }
})

let quartoArtigo = document.getElementById('quartoArtigo');
let quartoBotao = document.getElementById('quartoBotao');
quartoBotao.addEventListener('click', function(){
    if (quartoArtigo.style.display === 'none') {
        quartoArtigo.style.display = 'block';
        quartoBotao.innerHTML = 'Ver Menos';
    } else {
        quartoArtigo.style.display = 'none';
        quartoBotao.innerHTML = 'Ver Mais';
    }
})

let quintoArtigo = document.getElementById('quintoArtigo');
let quintoBotao = document.getElementById('quintoBotao');
quintoBotao.addEventListener('click', function(){
    if (quintoArtigo.style.display === 'none') {
        quintoArtigo.style.display = 'block';
        quintoBotao.innerHTML = 'Ver Menos';
    } else {
        quintoArtigo.style.display = 'none';
        quintoBotao.innerHTML = 'Ver Mais';
    }
})

