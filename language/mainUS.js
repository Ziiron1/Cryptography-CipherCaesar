const selecione = document.querySelector(".select");
const incremento = document.querySelector(".chave-container");
const btn = document.querySelector(".bttn");
const radiobtn = document.querySelector(".radio-button");
const codificar = document.querySelector("#codificar");
const decodificar = document.querySelector("#decodificar");

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
        btt.innerHTML = "Encode Message!";
    } else if (decodificar.checked) {
        btt.innerHTML = "Decode Message!";
    }
});

btt.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
        resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
        resultado.innerText = cifraCesar();
    }
});

/* MUDAR TEXTO */

function changetextbase64() {
    document.getElementById("alltext").innerHTML = '<h1>What is  <span id="dec"> Base64?</span></h1 <p> Base64 is a <span>algorithm</span> encoding method that allows you to transform any character from any language into an alphabet consisting of Latin letters, digits and signs. With that we can convert <span>special characters</span>  such as Chinese logograms, emoji and even images in a “readable” (for any computer) sequence that can be used anywhere else. <br> It is often used to transmit <span> Binary Data </span> through text-only transmissions, for example, to send images and attached files via e-mail. <br>It consists of 64 characters ([A-Za-z0-9], "/" and "+") that gave rise to its name.</p> <h2> <br> How works <span id="dec">Base64?</span> </h2> <h2> To encrypt the <span id="dec">Message </span></h2> <p> First of all, go to the field "<span> Select </span>" and choose to use Base64 <br> After that select .encrypt (Previously selected), and in the text field write your password or what you want to encrypt. Right after clicking the button "<span>Encode Message! </span> "Your Encrypted message will appear in the "Encrypted Message" text field <h2> To read a message <span id="dec">encoded</span> </h2> <p>Enter the encrypted message in the field "<span>Enter your message... </span>" , select .decode and press the button to decode </p> ';
}

function changetextcifra() {
    document.getElementById("alltext").innerHTML = '<h1><span id="dec">Caesar Cipher </span> History</h1> <p>Júlio César, was a Roman Emperor from 100 BC. to 44 BC, he did not just create the code, but he used to use a <span> code </span> to protect messages sent to his generals. Then, if the message fell into enemy hands, the information could not be understood by them. Each letter of <span> alphabet </span> was replaced by the letter three positions forward, that is, the “A” was replaced by the “D”, the “B” by the “E”, the “C” by the “F”, and so on successively. Any code that has this pattern is considered a Caesar Cipher, also known as a Code of Caesar.</p > <br> <h2> How it works? </h2><h2> To send message <span id="dec">encoded</span></h2> <p> First of all, go to the field " <span>Select </span> " and choose to use Caesar Cipher <br> After that, select your key (1 to 26).And select <span>.encode</span> and in the text field write the your password or what you want to encrypt. <br> Right after clicking the button "<span>Encode Message!</span>" Your Encrypted Message will appear in field of text "Encrypted Message" <h2> To read an <span id="dec">encoded </span> message</h2> <p> Enter the encrypted message in the field "<span>Enter your message... </span> " and in the "key" field the informed number by your sender to decode the cipher. </p>'
}