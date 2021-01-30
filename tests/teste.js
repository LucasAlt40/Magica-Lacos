document.getElementById("laco").onclick = function() {clica()};

function clica() {
  document.getElementById("square").style.width = "876px";
  document.getElementById("square").style.height = "395px";

  document.getElementById("ret1").style.width = "876px";
  document.getElementById("ret1").style.height = "44px";

  document.getElementById("laco").style.width = "341px";
  document.getElementById("laco").style.height = "317px";

  document.getElementById("nome-produto").style.marginLeft = "380px";

  // Adicionando uma tag strong para adicionar o preço
  var strong = document.createElement("strong");
  var preco = document.createTextNode("R$99,99");
  strong.appendChild(preco);
  var divAtual = document.getElementById("produto");
  document.body.insertBefore(strong, divAtual);
  strong.setAttribute('id', 'preco');

  document.getElementById("preco").style.transition = "400ms";
  document.getElementById("preco").style.position = "absolute";
  document.getElementById("preco").style.marginLeft = "412px";
  document.getElementById("preco").style.marginTop = "100px";
  document.getElementById("preco").style.fontFamily = "Ubuntu";
  document.getElementById("preco").style.fontSize = "28px";
  document.getElementById("preco").style.fontWeight = "normal";
}