const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chave-container");
const btn = document.querySelector(".bttn");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");


/* Alterar o texto  */
const cipher = document.querySelectorAll("#cipher-all")
/* const tittle1 = document.querySelector("#cipher-title");
const tittle2 = document.querySelector("#cipher-title2");
const tittle3 = document.querySelector("#cipher-title3");
const text1 = document.querySelector("#cipher-text1");
const text2 = document.querySelector("#cipher-text2"); */
// Incremento da Cifra de César
selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
        incremento.style.display = "block";
    } else {
        incremento.style.display = "none";
    }
});

// Base64

function base64() {
    let mensagem = document.querySelector("#mensagem").value;

    if (codificar.checked) {
        let codificado = btoa(mensagem);
        return codificado;
    } else if (decodificar.checked) {
        let decodificado = atob(mensagem);
        return decodificado;
    }
}

// Cifra de César

function cifraCesar() {
    let msg = document.querySelector("#mensagem").value;
    let chave = parseInt(document.querySelector("#rangenumber").value);
    let saida = '';

    if (codificar.checked) {
        for (let i = 0; i < msg.length; i++) {
            if (msg[i] === msg[i].toUpperCase()) {
                saida += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65);
            } else {
                saida += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
            }
        }
        return saida;

    } else if (decodificar.checked) {
        for (let i = 0; i < msg.length; i++) {
            if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
                saida += String.fromCharCode((msg.charCodeAt(i) - 97 - chave + 26) % 26 + 97);
            } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
                saida += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
            } else {
                saida += String.fromCharCode(msg.charCodeAt(i));
            }
        }
        return saida;
    }
}

// Botão
radiobtn.addEventListener("click", function () {
    if (codificar.checked) {
        btt.innerHTML = "Codificar Mensagem!";
    } else if (decodificar.checked) {
        btt.innerHTML = "Decodificar Mensagem!";
    }
});

btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
        resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
        resultado.innerText = cifraCesar();
    }
});

/* COLOCAR UM TRANSITION NO CSS PARA FAZER UMA COISA BONITINHA QUANDO CLICAR NO BOTAO
*/

/* MUDAR TEXTO */

function changetextbase64() {
    document.getElementById("alltext").innerHTML = '<h1> Como começou a base64?  </h1 <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti, recusandae ullam ducimus dolore laudantium, commodi aspernatur non aliquid ex accusamus voluptatibus sequi laboriosam! Necessitatibus voluptates soluta earum nisi quisquam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti, recusandae ullam ducimus dolore laudantium, commodi aspernatur non aliquid ex accusamus voluptatibus sequi laboriosam! Necessitatibus voluptates soluta earum nisi quisquam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni corrupti, recusandae ullam ducimus dolore laudantium, commodi aspernatur non aliquid ex accusamus voluptatibus sequi laboriosam! Necessitatibus voluptates soluta earum nisi quisquam!</p> <h2> Como funciona? </h2> <br> <h2> Para enviar <span> mensagem </span> codificada </h2> <p> Antes de tudo, vá no campo "Selecione" e escolha utilizar Cifra de César <br> Logo após, selecione sua chave ( 1 a 26). E seleciona .codificar e no campo de texto escreva a sua senha ou o que voce quer criptografar. </p>';
}

function changetextcifra() {
    document.getElementById("alltext").innerHTML = '<h1> AAAAAAAAA TENHO QUE DIGITAR ISSO TUDO </h1>'
}