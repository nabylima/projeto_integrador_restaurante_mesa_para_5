let index = 0;
const imagens = document.querySelector('.carousel-img');

function mudarImagem(){
    imagens[index].classList.remove('ativo');
    index = (index + 1) % imagens.clientHeight;
    imagens[index].classList.add('ativo')
    
}

setInterval(mudarImagem, 2000);//mudar imagem a cada 2 segundos
