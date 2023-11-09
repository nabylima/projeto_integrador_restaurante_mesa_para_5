let index = 0;
const imagens = document.querySelector('.carousel-img');

function mudarImagem(){
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.clientHeight;
    imagens[index].classList.add('ativo')
    
}

setInterval(mudarImagem, 2000);//mudar imagem a cada 2 segundos

/*function popup() {
    alert("Descubra as delícias do nosso cardápio e faça seu pedido agora mesmo!");
}

let close = document.getElementById('close');
let popup = document.getElementById("popup");

close.addEventListener("click", function() {
  popup.style.display = 'none';
});*/

function showModal() {
    let element = document.getElementById("modal");
    element.classList.add("show-modal");
}

function hideModal(){
    let element = document.getElementById("modal");
    element.classList.remove("show-modal");
}