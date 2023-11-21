
// Criação de cards no DOM
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
    <img class=imagemProduto src= ${cardsEspeciais[i].imagemEspeciais}>
    <h3 class=tituloProduto>${cardsEspeciais[i].tituloEspeciais}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descProduto>${cardsEspeciais[i].descEspeciais}</h5>
    <h4 class=precoProduto>${cardsEspeciais[i].precoEspeciais}</h4>
    <button class="buttonProduto">Adicionar</button>
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
    <img class=imagemProduto src= ${cardsSaladas[i].imagemSaladas}>
    <h3 class=tituloProduto>${cardsSaladas[i].tituloSaladas}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descProduto>${cardsSaladas[i].descSaladas}</h5>
    <h4 class=precoProduto>${cardsSaladas[i].precoSaladas}</h4>
    <button class="buttonProduto">Adicionar</button>
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
    <img class=imagemProduto src= ${cardsCarnes[i].imagemCarnes}>
    <h3 class=tituloProduto>${cardsCarnes[i].tituloCarnes}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descProduto>${cardsCarnes[i].descCarnes}</h5>
    <h4 class=precoProduto>${cardsCarnes[i].precoCarnes}</h4>
    <button class="buttonProduto">Adicionar</button>
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
    <img class=imagemProduto src= ${cardsVegetarianaMassas[i].imagemVegetarianaMassas}>
    <h3 class=tituloProduto>${cardsVegetarianaMassas[i].tituloVegetarianaMassas}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descProduto>${cardsVegetarianaMassas[i].descVegetarianaMassas}</h5>
    <h4 class=precoProduto>${cardsVegetarianaMassas[i].precoVegetarianaMassas}</h4>
    <button class="buttonProduto">Adicionar</button>
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
    <img class=imagemProduto src= ${cardsAcompanhamentos[i].imagemAcompanhamentos}>
    <h3 class=tituloProduto>${cardsAcompanhamentos[i].tituloAcompanhamentos}</h3>
    <img class=imagemEstrelas src= "./img_cardapio/13-Estrelas.svg" ${cardsEspeciais[i].imagemEstrelas}>
    <h5 class=descProduto>${cardsAcompanhamentos[i].descAcompanhamentos}</h5>
    <h4 class=precoProduto>${cardsAcompanhamentos[i].precoAcompanhamentos}</h4>
    <button class="buttonProduto">Adicionar</button>
  `
acompanhamentosCards.appendChild(divAcompanhamentos)
}


// PEDIDOS
let inputsCorretos = {
  username: false,
  phone: false,
  email: false,
  endereco: false,
  numero: false
}
if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}else {
    ready()
}

var totalPedido = "0,00"

function ready() {
    

     // Preço e quantidade carrinho
    const qtdProduto = document.getElementsByClassName("quantCart")
    for (var i = 0; i < qtdProduto.length; i++) {
        qtdProduto[i].addEventListener("change", updateTotal)
    }

    // Adicionando produtos no carrinho
    const cardPedido = document.getElementsByClassName ("buttonProduto")
    for (let i = 0; i < cardPedido.length; i ++){
        cardPedido[i].addEventListener("click", addProductCart)
    }

    // Para botão finalizar compra funcionar
    const enviarPedido = document.getElementsByClassName("button-resumo-compra")[0]
    enviarPedido.addEventListener("click", compraFinalizada)

}

// Para botão finalizar compra funcionar
function compraFinalizada() {

    // Variável para criar números aleatórios: Senha do pedido
    const numeroAleatorio = Math.floor(Math.random() * 900000) + 100000;

    const pedidoDelivery = document.querySelector("input[name = 'pedido']:checked").value;
    if (totalPedido === "0,00") {
        alert("Carrinho de compras vazio!")
    } else if (pedidoDelivery === "retirar"){
        alert(
            `
                Seu pedido está sendo preparado!
                Em breve estará pronto para ser retirado.
                Valor do pedido: R$ ${totalPedido}
                Senha do pedido: ${numeroAleatorio}
                AGRADEMOS O SEU PEDIDO!
            `
        )
    }

    document.querySelector(".cardtable tbody").innerHTML = ""


    if (pedidoDelivery === "delivery" && totalPedido != '0,00') {
        location.href = '#delivery';
        document.querySelector(".pedido-delivery").innerHTML = `R$ ${totalPedido}`
    }
    updateTotal()
    
    const deliveryFinalizado = document.querySelectorAll('button[type="submit"]')[1]
    deliveryFinalizado.addEventListener("click", function(e) {
        const totalPedidoDelivery = document.querySelector(".pedido-delivery").innerText
        if(inputsCorretos.username == false ||
            inputsCorretos.phone == false ||
          inputsCorretos.email == false ||
          inputsCorretos.endereco == false ||
          inputsCorretos.numero == false){
          e.preventDefault()
          alert('Os campos obrigatório precisam ser preenchidos corretamente')
        } else {
            alert(
            `
                Seu pedido está sendo preparado!
                Em breve será entregue.
                Valor do pedido: R$ ${totalPedidoDelivery}
                Senha do pedido: ${numeroAleatorio}
                AGRADEMOS O SEU PEDIDO!
            `
            ); 
        }
    })
}

// Adicionando produtos no carrinho
function addProductCart(event) {
    const cardButton = event.target
    const cardInfo = cardButton.parentElement
    const imgInfo = cardInfo.getElementsByClassName('imagemProduto')[0].src
    const tituloInfo = cardInfo.getElementsByClassName('tituloProduto')[0].innerHTML
    const precoInfo =  cardInfo.getElementsByClassName('precoProduto')[0].innerHTML


    let novoProduto = document.createElement("tr")
    novoProduto.classList.add("cardPedido")

    novoProduto.innerHTML = 
    `
        <td class="desc-pedido-campo">
            <img src="${imgInfo}" alt="${tituloInfo}" />
            <div class="info">
                <div class="name">${tituloInfo}</div>
            </div>
        </td>
        <td class= "precoPedido">${precoInfo}</td>
        <td>
            <input id="quantCart" class="quantCart" type="number" value="1" min="0">
        </td>
        <td>
            <button class="remove-pedido"><i class='bx bx-x'></i></button>
        </td>

    `
    const tableBody = document.querySelector(".cardtable tbody")
    tableBody.append(novoProduto)

    // Para atualizar o total, o remover e a quantidade
    updateTotal()

    // Remover pedido carrinho
    const removePedido = document.getElementsByClassName("remove-pedido")
    for (var i = 0; i < removePedido.length; i++) {
        removePedido[i].addEventListener("click", removeProduct)
    }
    novoProduto.getElementsByClassName("quantCart")[0].addEventListener("change", updateTotal) 
}

// Remover pedido carrinho função
function removeProduct(event) {
    event.target.parentElement.parentElement.parentElement.remove()
    updateTotal()
}

 // Preço e quantidade carrinho
function updateTotal() {
    totalPedido = 0
    const cartPedido = document.getElementsByClassName("cardPedido")
    for (var i = 0; i < cartPedido.length; i ++){
    
        const precoPedido = cartPedido[i].getElementsByClassName("precoPedido")[0].innerText.replace("R$", "").replace(",", ".")
        const qtdPedido = cartPedido[i].getElementsByClassName("quantCart")[0].value
        
        totalPedido += precoPedido * qtdPedido
    }
    
    totalPedido = parseFloat(totalPedido).toFixed(2)
    totalPedido = totalPedido.replace(".", ",")
    document.querySelectorAll(".resumo-total span")[1].innerText = "R$ " + totalPedido
}



//----------------------- DELIVERY ---------------------------//

// ------------------Validação do Username------------------//
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper")

function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório //
    input.addEventListener("focus", function() {
        label.classList.add("required-popup")
    })

    // Ocultar popup de campo obrigatório //
    input.addEventListener("blur", function() {
        label.classList.remove("required-popup")
    })    
}

mostrarPopup(usernameInput, usernameLabel)


// Validar valor do input //
usernameInput.addEventListener("change", function(e) {
    let valor = e.target.value
    if (valor.length < 3) {
        // Valor incorreto
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres"
        usernameHelper.classList.add("visible");

    } else {
        // Valor correto
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
        inputsCorretos.username = true
    }
})
usernameInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

       usernameHelper.innerText = "Preencha esse campo";
       usernameHelper.classList.add("visible");
    }
});


// ------------------Validação Email------------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

mostrarPopup(emailInput, emailLabel)

// Validar email //
emailInput.addEventListener("change", function(e){
    let valor = e.target.value
    if(valor.includes("@") && valor.includes(".com")){
        // Email válido
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
        inputsCorretos.email = true
    } else {
        // Email incorreto
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Forneça um endereço de e-mail pessoal válido."
        emailHelper.classList.add("visible");
    }
})
emailInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

       emailHelper.innerText = "Preencha esse campo";
       emailHelper.classList.add("visible");
    }
});


// ------------------Validação do Numero do Telefone------------------//
let phoneInput = document.getElementById("phone")
let phoneLabel = document.querySelector('label[for="phone"]')
let phoneHelper = document.getElementById("phone-helper")

mostrarPopup(phoneInput, phoneLabel)

phoneInput.addEventListener("input", function (e) {
    let phoneNumber = e.target.value;

    let phoneRegex = /^\d{11}$/;

    if (phoneRegex.test(phoneNumber)) {
        // Celular Valido válido
        phoneInput.classList.remove("error");
        phoneInput.classList.add("correct");
        phoneHelper.classList.remove("visible");
        inputsCorretos.phone = true
    } else {
        // Celular incorreto
        phoneInput.classList.remove("correct");
        phoneInput.classList.add("error");
        phoneHelper.innerText = "O número de telefone que introduziu é inválido.";
        phoneHelper.classList.add("visible");
    }
});
phoneInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

        phoneHelper.innerText = "Preencha esse campo";
        phoneHelper.classList.add("visible");
    }
});


// ------------------Validação do endereço------------------//
let enderecoInput = document.getElementById("endereco");
let enderecoLabel = document.querySelector('label[for="endereco"]');
let enderecoHelper = document.getElementById("endereco-helper");

mostrarPopup(enderecoInput, enderecoLabel)

// Validar valor do input 
enderecoInput.addEventListener("input", function (e) {
    let valor = e.target.value;
    if (valor.length < 3) {
        // Valor incorreto
        enderecoInput.classList.remove("correct");
        enderecoInput.classList.add("error");
        enderecoHelper.innerText = "Insira um endereço válido"
        enderecoHelper.classList.add("visible");
    } else {
        // Valor Correto
        enderecoInput.classList.remove("error");
        enderecoInput.classList.add("correct");
        enderecoHelper.classList.remove("visible");
        inputsCorretos.endereco = true
    }
})
enderecoInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

        enderecoHelper.innerText = "Preencha esse campo";
        enderecoHelper.classList.add("visible");
    }
});


// ------------------Validação do número------------------//
let numeroInput = document.getElementById("numero");
let numeroLabel = document.querySelector('label[for="numero"]');
let numeroHelper = document.getElementById("num-helper");

mostrarPopup(numeroInput, numeroLabel)

// Validar valor do input 
numeroInput.addEventListener("input", function (e) {
   
    let valor = e.target.value;
    if (valor.length < 2) {
        // Valor incorreto
        numeroInput.classList.remove("correct");
        numeroInput.classList.add("error");
        numeroHelper.innerText = "Insira um endereço válido"
        numeroHelper.classList.add("visible");
    } else {
        // Valor Correto
        numeroInput.classList.remove("error");
        numeroInput.classList.add("correct");
        numeroHelper.classList.remove("visible");
        inputsCorretos.numero = true
        
    }
})

numeroInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

       numeroHelper.innerText = "Preencha esse campo";
       numeroHelper.classList.add("visible");
    }
});


// ---------- EVITAR ENVIO DO FORMULÁRIO ---------- //

// A lógica está dentro da função comprafinalizada()





