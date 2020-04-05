


var ajax;
var dadosUsuario;





// ....... cria o objeto e faz a requisição
function requisicaoHTTP(tipo, url, assinc) {
    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        ajax = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        ajax = new ActiveX0bject("Msxml2.XMLHTTP");
        if (!ajax) {
            ajax = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (ajax) // iniciou com sucesso
        iniciaRequisicao(tipo, url, assinc);
    else
        alert("Seu navegador não possui suporte a essa aplicação!");



}
// ....... Inicializa o objeto criado e envia os dados (se existirem)
function iniciaRequisicao(tipo, url, bool) {
    ajax.onreadystatechange = trataResposta;
    ajax.open(tipo, url, bool);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    ajax.send(dadosUsuario);
}


// ....... Inicia requisiÃ§Ã£o com envio de dados
function enviaDados(url) {
    criaQueryString();
    requisicaoHTTP("POST", url, true);
}


// ....... Cria a string a ser enviada, formato campol=valorl&campo2=valor2...
function criaQueryString() {
    dadosUsuario = "";
    var frm = document.forms[0];
    var numElementos = frm.elements.length;
    for (var i = 0; i < numElementos; i++) {
        if (i < numElementos - 1) {
            dadosUsuario += frm.elements[i], name + "=" +
                    encodeURIComponent(frm.elements[i].value) + "&";
        } else {
            dadosUsuario += frm.elementsf[i], name + "=" +
                    encodeURIComponent(frm.elements [i].value);
        }
    }
}



// ....... Trata a resposta do servidor
function trataResposta() {
    if (ajax.readyState === 4) {
        if (ajax.status === 200) {
            trataDados(); // criar essa funÃ§Ã£o no seu programa
        } else {
            alert("Problema na comunicaÃ§Ã£o com o objeto XMLHttpRequest.");
        }
    }
}
function tempoEsgotado() {
    ajax.abort();
    alert("Problema na comunicaÃ§Ã£o com o servidor. Tente acessar mais tarde.");
}

function myFunction() {
                var x = document.getElementById("myTopnav");
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }




