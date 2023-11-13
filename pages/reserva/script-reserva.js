
//script escolher mesas 

let indexValue = 1;
showImg(indexValue);
function btm_slide(e) { showImg(indexValue = e); }
function side_slide(e) { showImg(indexValue += e); }
function showImg(e) {
    let i;
    const img = document.querySelectorAll('.imagens img');
    const sliders = document.querySelectorAll('.btm-sliders span');
    if (e > img.length) { indexValue = 1 }
    if (e < 1) { indexValue = img.length }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < img.length; i++) {
        sliders[i].style.background = "#ffffff";
    }
    img[indexValue - 1].style.display = "block";
    sliders[indexValue - 1].style.background = "#F2BD57";
}

// validação formulário

let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

function mostrarPopup(input, label) {
    // Mostrando o popup do campo obrigatório
    input.addEventListener("focus", function () {
        label.classList.add("required-popup")
    })

    // Ocultando o popup do campo obrigatório
    input.addEventListener("blur", function () {
        label.classList.remove("required-popup")
    })
}

mostrarPopup(usernameInput, usernameLabel)

// Validar valor do input 
usernameInput.addEventListener("input", function (e) {
    let valor = e.target.value;
    if (valor.length < 3) {
        // Valor incorreto
        usernameInput.classList.remove("correct");
        usernameInput.classList.add("error");
        usernameHelper.innerText = "Seu nome precisa ter 3 ou mais caracteres"
        usernameHelper.classList.add("visible");
    } else {
        // Valor Correto
        usernameInput.classList.remove("error");
        usernameInput.classList.add("correct");
        usernameHelper.classList.remove("visible");
    }
})

usernameInput.addEventListener("blur", function (e) {
    let valor = e.target.value;
    if (valor.length === 0) {

        usernameHelper.innerText = "Preencha esse campo";
        usernameHelper.classList.add("visible");
    }
});

// Validação do Email //
let emailInput = document.getElementById("email")
let emailLabel = document.querySelector('label[for="email"]')
let emailHelper = document.getElementById("email-helper")

mostrarPopup(emailInput, emailLabel);

emailInput.addEventListener("change", function (e) {
    let valor = e.target.value;

    if (valor.includes("@") && valor.includes(".com")) {
        // Email válido
        emailInput.classList.remove("error");
        emailInput.classList.add("correct");
        emailHelper.classList.remove("visible");
    } else {
        // Email incorreto
        emailInput.classList.remove("correct");
        emailInput.classList.add("error");
        emailHelper.innerText = "Forneça um endereço de e-mail pessoal válido.";
        emailHelper.classList.add("visible");
    }
});

emailInput.addEventListener("blur", function () {
    let valor = e.target.value;
    if (valor.length === 0) {

        emailHelper.innerText = "Preencha esse campo";
        emailHelper.classList.add("visible");
    }

});

// Validação do Numero de Pessoas // 
let pessoasInput = document.getElementById("total_de_pessoas")
let pessoasLabel = document.querySelector('label[for="total_de_pessoas"]')
let pessoasHelper = document.getElementById("pessoas-helper")

pessoasInput.addEventListener("input", function (e) {
    let pessoas = e.target.value;

    if (!isNaN(pessoas) && pessoas > 0 && pessoas <= 5) {

        pessoasInput.classList.remove("error");
        pessoasInput.classList.add("correct");
        pessoasHelper.innerText = "";
        pessoasHelper.classList.remove("visible");
    } else {

        pessoasInput.classList.remove("correct");
        pessoasInput.classList.add("error");

        if (isNaN(pessoas) || pessoas <= 0) {
            pessoasHelper.innerText = "Forneça um número de pessoas válido (1 a 5)"
        } else if (pessoas > 5) {
            pessoasHelper.innerText = "Reservas de até 5 pessoas por Mesa.";
        }
        pessoasHelper.classList.add("visible");
    }
});

// Validação do Numero do Celular // 
let phoneInput = document.getElementById("phone")
let phoneLabel = document.querySelector('label[for="phone"]')
let phoneHelper = document.getElementById("phone-helper")

phoneInput.addEventListener("input", function (e) {
    let phoneNumber = e.target.value;

    let phoneRegex = /^\d{11}$/;

    if (phoneRegex.test(phoneNumber)) {
        // Celular Valido válido
        phoneInput.classList.remove("error");
        phoneInput.classList.add("correct");
        phoneHelper.classList.remove("visible");
    } else {
        // Celular incorreto
        phoneInput.classList.remove("correct");
        phoneInput.classList.add("error");
        phoneHelper.innerText = "O número de telefone que introduziu é inválido.";
        phoneHelper.classList.add("visible");
    }
});

// Validação na data da reserva // 

let dateInput = document.getElementById("date")
let dateLabel = document.querySelector('label[for="date"]')
let dateHelper = document.getElementById("date-helper")

dateInput.addEventListener("input", function () {
    validateDate();
});

dateInput.addEventListener("blur", function () {
    validateDate();
});

function validateDate() {
    if (!dateInput.value) {
        dateInput.setCustomValidity("Por favor, escolha uma data.");
        dateInput.classList.add("error");
        dateInput.classList.remove("correct");
        dateHelper.innerText = "*Por favor escolha uma data";
        dateHelper.classList.add("visible");
    } else {
        dateInput.setCustomValidity("");
        dateInput.classList.remove("error");
        dateInput.classList.add("correct");
        dateHelper.innerText = "";
        dateHelper.classList.remove("visible");
    }
};

// Validação na data da reserva // 


let timeInput = document.getElementById("time")
let timeLabel = document.querySelector('label[for="time"]')
let timeHelper = document.getElementById("time-helper")

timeInput.addEventListener("input", function () {
    validateTime();
});

timeInput.addEventListener("blur", function () {
    validateTime();
});

function validateTime() {
    if (!timeInput.value) {
        timeInput.setCustomValidity("Por favor, escolha a hora da reserva.");
        timeInput.classList.add("error");
        timeInput.classList.remove("correct");
        timeHelper.innerText = "*Por favor, escolha a hora da reserva.";
        timeHelper.classList.add("visible");
    } else {
        timeInput.setCustomValidity("");
        timeInput.classList.remove("error");
        timeInput.classList.add("correct");
        timeHelper.innerText = "";
        timeHelper.classList.remove("visible");
    }
};

// Validação Selecionar Mesas //

let mesasSelect = document.getElementById("mesas");
let mesasLabel = document.querySelector('label[for="mesas"]');
let mesasHelper = document.getElementById("mesas-helper");

mesasSelect.addEventListener("change", function () {
    validateSelect();
});

mesasSelect.addEventListener("blur", function () {
    validateSelect();
});

function validateSelect() {
    if (mesasSelect.value === "") {
        mesasSelect.setCustomValidity("Por favor, uma mesa.");
        mesasSelect.classList.add("error");
        mesasSelect.classList.remove("correct");
        mesasHelper.innerText = "*Por favor, uma mesa.";
        mesasHelper.classList.add("visible");
    } else {
        mesasSelect.setCustomValidity("");
        mesasSelect.classList.remove("error");
        mesasSelect.classList.add("correct");
        mesasHelper.innerText = "";
        mesasHelper.classList.remove("visible");
    }
}

// Validação dos Cupons //

const imagensCupons = {
    "DESCONTOPARACINCO": "/img/desconto-para-cinco.png",
    "DESCONTOPARACINCONONATAL": "/img/desconto-para-cinco-no-natal-25.png"
};

function exibirImagemDoCupom() {
    let cupom = document.getElementById("cupom").value.toUpperCase();

    if (cupom.trim() === "") {
        alert("Digite um cupom de desconto antes de exibir a imagem.");
        return;
    }

    let imagemUrl = imagensCupons[cupom];

    if (imagemUrl) {
        let imagemModal = document.getElementById("imagemModal");
        let modalImagem = document.getElementById("modalImagem");

        modalImagem.src = imagemUrl;
        modalImagem.alt = "Imagem relacionada ao cupom de desconto";
        imagemModal.style.display = "flex";
    } else {
        alert("Cupom de desconto não encontrado.");
    }
}

function fecharImagem() {
    let imagemModal = document.getElementById("imagemModal");
    imagemModal.style.display = "none";
}





