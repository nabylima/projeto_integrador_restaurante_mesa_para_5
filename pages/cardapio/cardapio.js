const cardsEspeciais = [
    {
        imagemEspeciais: "./img_cardapio/2-feijoada-tradicional.svg",
        tituloEspeciais: "Feijoada tradicional",
        descEspeciais: "Feijoada acompanhada de arroz, couve, farofa e vinagrete",
        precoEspeciais: "R$ 35,00",
    },
    {
        imagemEspeciais: "./img_cardapio/2-file-de-frango.svg",
        tituloEspeciais: "Filé de frango da casa",
        descEspeciais: "Filé de frango, feijão, brócolis, mandioca, cenoura, couve e tomates",
        precoEspeciais: "R$ 20,00",
    },
    {
        imagemEspeciais: "./img_cardapio/2-peixe-da-casa.svg",
        tituloEspeciais: "Peixe a moda da casa",
        descEspeciais: "Peixe grelhado com purê, grão de bico e salada verde",
        precoEspeciais: "R$ 30,00",
    },
    {
        imagemEspeciais: "./img_cardapio/2-feijao-tropeiro.svg",
        tituloEspeciais: "Feijão tropeiro tradicional",
        descEspeciais: "Feijão, farofa, couve, bacon, pimentões e linguiça calabresa",
        precoEspeciais: "R$ 40,00",
    },
]
const especiaisCards = document.querySelector('.especiais-cards')
for (let i = 0; i < cardsEspeciais.length; i++) {
    const divEspeciais = document.createElement('div')

    divEspeciais.classList.add('conteiner-especiais')
    divEspeciais.innerHTML = `
    <img class=imagemEspeciais src= ${cardsEspeciais[i].imagemEspeciais}>
    <h3 class=tituloEspeciais>${cardsEspeciais[i].tituloEspeciais}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descEspeciais>${cardsEspeciais[i].descEspeciais}</h5>
    <h4 class=precoEspeciais>${cardsEspeciais[i].precoEspeciais}</h4>
    <button class="button-especiais">Adicionar</button>
  `
especiaisCards.appendChild(divEspeciais)
}


const cardsSaladas = [
    {
        imagemSaladas: "./img_cardapio/4-salada-verde.svg",
        tituloSaladas: "Salada verde com peixe",
        descSaladas: "Peixe, ovos, tomates, repolho, pepino, alface e ervas finas",
        precoSaladas: "R$ 15,00",
    },
    {
        imagemSaladas: "./img_cardapio/4-salada-panzanella.svg",
        tituloSaladas: "Panzanella",
        descSaladas: "Salada com pão, tomates e ervas finas",
        precoSaladas: "R$ 12,00",
    },
    {
        imagemSaladas: "./img_cardapio/4-salada-abacate.svg",
        tituloSaladas: "Salada de abacate",
        descSaladas: "Abacate, tomates, ricota e ervas finas",
        precoSaladas: "R$ 12,00",
    },
    {
        imagemSaladas: "./img_cardapio/4-salada-nozes.svg",
        tituloSaladas: "Salada com nozes",
        descSaladas: "Alface, cenoura, nozes, azeitonas e cebola",
        precoSaladas: "R$ 15,00",
    },
]
const saladasCards = document.querySelector('.saladas-cards')
for (let i = 0; i < cardsSaladas.length; i++) {
    const divSaladas = document.createElement('div')

    divSaladas.classList.add('conteiner-Saladas')
    divSaladas.innerHTML = `
    <img class=imagemSaladas src= ${cardsSaladas[i].imagemSaladas}>
    <h3 class=tituloSaladas>${cardsSaladas[i].tituloSaladas}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descSaladas>${cardsSaladas[i].descSaladas}</h5>
    <h4 class=precoSaladas>${cardsSaladas[i].precoSaladas}</h4>
    <button class="button-saladas">Adicionar</button>
  `
saladasCards.appendChild(divSaladas)
}


const cardsCarnes = [
    {
        imagemCarnes: "./img_cardapio/5-file-ao-ponto.svg",
        tituloCarnes: "Filé ao ponto do chef",
        descCarnes: "Carne bovina acompanhada de brócolis e ervilhas",
        precoCarnes: "R$ 35,00",
    },
    {
        imagemCarnes: "./img_cardapio/5-asinhas-frango.svg",
        tituloCarnes: "Asinhas de frango picante",
        descCarnes: "Asinhas de frango ao molho picante",
        precoCarnes: "R$ 20,00",
    },
    {
        imagemCarnes: "./img_cardapio/5-carne-panela.svg",
        tituloCarnes: "Carne de panela",
        descCarnes: "Carne bovina cozida no molho vermelho",
        precoCarnes: "R$ 25,00",
    },
    {
        imagemCarnes: "./img_cardapio/5-peixe-molho.svg",
        tituloCarnes: "Peixe ao molho de coco",
        descCarnes: "Peixe cozido ao molho de coco com ervas finas",
        precoCarnes: "R$ 25,00",
    },
]
const carnesCards = document.querySelector('.carnes-cards')
for (let i = 0; i < cardsCarnes.length; i++) {
    const divCarnes = document.createElement('div')

    divCarnes.classList.add('conteiner-Carnes')
    divCarnes.innerHTML = `
    <img class=imagemCarnes src= ${cardsCarnes[i].imagemCarnes}>
    <h3 class=tituloCarnes>${cardsCarnes[i].tituloCarnes}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descCarnes>${cardsCarnes[i].descCarnes}</h5>
    <h4 class=precoCarnes>${cardsCarnes[i].precoCarnes}</h4>
    <button class="button-Carnes">Adicionar</button>
  `
carnesCards.appendChild(divCarnes)
}


const cardsVegetarianaMassas = [
    {
        imagemVegetarianaMassas: "./img_cardapio/6-berinjela-recheada.svg",
        tituloVegetarianaMassas: "Berinjela recheada",
        descVegetarianaMassas: "Berinjela recheada com carne vegetal e creme branco",
        precoVegetarianaMassas: "R$ 25,00",
    },
    {
        imagemVegetarianaMassas: "./img_cardapio/6-repolho-refogado.svg",
        tituloVegetarianaMassas: "Repolho refogado",
        descVegetarianaMassas: "Repolho refogado com queijo e ervas finas",
        precoVegetarianaMassas: "R$ 25,00",
    },
    {
        imagemVegetarianaMassas: "./img_cardapio/6-espaguete-molho.svg",
        tituloVegetarianaMassas: "Espaguete ao molho",
        descVegetarianaMassas: "Espaguete ao molho vermelho com tomates e ervas finas",
        precoVegetarianaMassas: "R$ 25,00",
    },
    {
        imagemVegetarianaMassas: "./img_cardapio/6-espaguete-camarao.svg",
        tituloVegetarianaMassas: "Espaguete com camarão",
        descVegetarianaMassas: "Espaguete com camarão e tiras de carne bovina",
        precoVegetarianaMassas: "R$ 35,00",
    },
]
const vegetarianaMassasCards = document.querySelector('.vegetarianas-massas-cards')
for (let i = 0; i < cardsVegetarianaMassas.length; i++) {
    const divVegetarianaMassas = document.createElement('div')

    divVegetarianaMassas.classList.add('conteiner-VegetarianaMassas')
    divVegetarianaMassas.innerHTML = `
    <img class=imagemVegetarianaMassas src= ${cardsVegetarianaMassas[i].imagemVegetarianaMassas}>
    <h3 class=tituloVegetarianaMassas>${cardsVegetarianaMassas[i].tituloVegetarianaMassas}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descVegetarianaMassas>${cardsVegetarianaMassas[i].descVegetarianaMassas}</h5>
    <h4 class=precoVegetarianaMassas>${cardsVegetarianaMassas[i].precoVegetarianaMassas}</h4>
    <button class="button-VegetarianaMassas">Adicionar</button>
  `
vegetarianaMassasCards.appendChild(divVegetarianaMassas)
}


const cardsAcompanhamentos = [
    {
        imagemAcompanhamentos: "./img_cardapio/7-arroz-branco.svg",
        tituloAcompanhamentos: "Arroz branco",
        descAcompanhamentos: "Arroz branco",
        precoAcompanhamentos: "R$ 8,00",
    },
    {
        imagemAcompanhamentos: "./img_cardapio/7-arroz-primavera.svg",
        tituloAcompanhamentos: "Arroz primavera",
        descAcompanhamentos: "Arroz cozido com pimentões, vagem e cebolinha fresca",
        precoAcompanhamentos: "R$ 8,00",
    },
    {
        imagemAcompanhamentos: "./img_cardapio/7-pure-batatas.svg",
        tituloAcompanhamentos: "Purê de batatas",
        descAcompanhamentos: "Purê de batatas",
        precoAcompanhamentos: "R$ 12,00",
    },
    {
        imagemAcompanhamentos: "./img_cardapio/7-batatas-fritas.svg",
        tituloAcompanhamentos: "Batatas fritas",
        descAcompanhamentos: "Batatas fritas crocantes por fora e macias por dentro",
        precoAcompanhamentos: "R$ 12,00",
    },
]
const acompanhamentosCards = document.querySelector('.acompanhamentos-cards')
for (let i = 0; i < cardsAcompanhamentos.length; i++) {
    const divAcompanhamentos = document.createElement('div')

    divAcompanhamentos.classList.add('conteiner-Acompanhamentos')
    divAcompanhamentos.innerHTML = `
    <img class=imagemAcompanhamentos src= ${cardsAcompanhamentos[i].imagemAcompanhamentos}>
    <h3 class=tituloAcompanhamentos>${cardsAcompanhamentos[i].tituloAcompanhamentos}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descAcompanhamentos>${cardsAcompanhamentos[i].descAcompanhamentos}</h5>
    <h4 class=precoAcompanhamentos>${cardsAcompanhamentos[i].precoAcompanhamentos}</h4>
    <button class="button-Acompanhamentos">Adicionar</button>
  `
acompanhamentosCards.appendChild(divAcompanhamentos)
}


