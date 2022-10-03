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
        let texto1 = document.getElementById("alltext")
        texto1.innerHTML = '<h1>História da <span id="dec">Cifra de César</span></h1> <p> Júlio César, era um imperador romano de 100 a.C. a 44 a.C., ele não só criou como utilizava um <span> código </span> para proteger as mensagens enviadas a seus generais. Assim, se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida por eles. Cada letra do <span> alfabeto </span> era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C” pelo “F”, e assim sucessivamente. Qualquer código que tenha esse padrão é considerado uma Cifra de César, também conhecida como Código de César. </p> <br> <h2> Como funciona? </h2><h2> Para enviar mensagem <span id="dec">codificada</span></h2> <p> Antes de tudo, vá no campo "<span> Selecione </span>" e escolha utilizar Cifra de César <br> Logo após, selecione sua chave ( 1 a 26). E seleciona .codificar e no campo de texto escreva a sua senha ou o que voce quer criptografar. <br> Logo após clicar no botão "<span>Codificar Mensagem!</span> " A sua mensagem Criptografada aparecerá no campo de texto "Mensagem Criptografada" <h2> Para ler uma mensagem <span id="dec">codificada</span> </h2> <p> Insira a mensagem cifrada no campo "<span>Digite sua mensagem... </span>" e no campo "chave" o número informado pelo seu remetente para decodificar a cifra. </p>';

    } else {
        incremento.style.display = "none";
        document.getElementById("alltext").innerHTML = '<h1> O que é <span id="dec">Base64?</span></h1 <p> Base64 é um <span>algoritmo</span> de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. Com isso podemos converter <span>caracteres especiais</span>  como os logogramas chineses, emoji e até imagens em uma sequência “legível” (para qualquer computador), que pode ser usado em qualquer outro lugar. <br> É utilizado frequentemente para transmitir <span>dados binários </span> por meio de transmissões que lidam apenas com texto, como, por exemplo, para enviar imagens e arquivos em anexo por e-mail. <br> É constituído por 64 caracteres ([A-Za-z0-9], "/" e "+") que deram origem ao seu nome.</p> <h2> <br> Como funciona <span id="dec">Base64?</span> </h2> <h2> Para criptografar a <span id="dec">mensagem</span></h2> <p> Antes de tudo, vá no campo "<span> Selecione </span>" e escolha utilizar Base64 <br> Logo após selecione .codificar (Previamente selecionado), e no campo de texto escreva a sua senha ou o que voce quer criptografar. Logo após clicar no botão "<span>Codificar Mensagem!</span> " A sua mensagem Criptografada aparecerá no campo de texto "Mensagem Criptografada" <h2> Para ler uma mensagem <span id="dec">codificada</span> </h2> <p> Insira a mensagem criptografada no campo de "<span>Digite sua mensagem... </span>" , selecione .descodificar e aperte no botão para descodificar </p> '
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
    document.getElementById("alltext").innerHTML = '<h1> O que é <span id="dec">Base64?</span></h1 <p> Base64 é um <span>algoritmo</span> de codificação (encoding) que permite transformar qualquer caractere de qualquer idioma em um alfabeto que consiste em letras latinas, dígitos e sinais. Com isso podemos converter <span>caracteres especiais</span>  como os logogramas chineses, emoji e até imagens em uma sequência “legível” (para qualquer computador), que pode ser usado em qualquer outro lugar. <br> É utilizado frequentemente para transmitir <span>dados binários </span> por meio de transmissões que lidam apenas com texto, como, por exemplo, para enviar imagens e arquivos em anexo por e-mail. <br> É constituído por 64 caracteres ([A-Za-z0-9], "/" e "+") que deram origem ao seu nome.</p> <h2> <br> Como funciona <span id="dec">Base64?</span> </h2> <h2> Para criptografar a <span id="dec">mensagem</span></h2> <p> Antes de tudo, vá no campo "<span> Selecione </span>" e escolha utilizar Base64 <br> Logo após selecione .codificar (Previamente selecionado), e no campo de texto escreva a sua senha ou o que voce quer criptografar. Logo após clicar no botão "<span>Codificar Mensagem!</span> " A sua mensagem Criptografada aparecerá no campo de texto "Mensagem Criptografada" <h2> Para ler uma mensagem <span id="dec">codificada</span> </h2> <p> Insira a mensagem criptografada no campo de "<span>Digite sua mensagem... </span>" , selecione .descodificar e aperte no botão para descodificar </p> ';
}

function changetextcifra() {
    document.getElementById("alltext").innerHTML = '<h1>História da <span id="dec">Cifra de César</span></h1> <p> Júlio César, era um imperador romano de 100 a.C. a 44 a.C., ele não só criou como utilizava um <span> código </span> para proteger as mensagens enviadas a seus generais. Assim, se a mensagem caísse em mãos inimigas, a informação não poderia ser compreendida por eles. Cada letra do <span> alfabeto </span> era substituída pela letra três posições à frente, ou seja, o “A” era substituído pelo “D”, o “B” pelo “E”, o “C” pelo “F”, e assim sucessivamente. Qualquer código que tenha esse padrão é considerado uma Cifra de César, também conhecida como Código de César. </p> <br> <h2> Como funciona? </h2><h2> Para enviar mensagem <span id="dec">codificada</span></h2> <p> Antes de tudo, vá no campo "<span> Selecione </span>" e escolha utilizar Cifra de César <br> Logo após, selecione sua chave ( 1 a 26). E seleciona .codificar e no campo de texto escreva a sua senha ou o que voce quer criptografar. <br> Logo após clicar no botão "<span>Codificar Mensagem!</span> " A sua mensagem Criptografada aparecerá no campo de texto "Mensagem Criptografada" <h2> Para ler uma mensagem <span id="dec">codificada</span> </h2> <p> Insira a mensagem cifrada no campo "<span>Digite sua mensagem... </span>" e no campo "chave" o número informado pelo seu remetente para decodificar a cifra. </p>'
}