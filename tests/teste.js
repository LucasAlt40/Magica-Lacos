document.getElementById("laco").onclick = function() {clica()};

function clica() {
  document.getElementById("produto").classList.add("selected");

  document.getElementById("laco").onclick = function() {clicaAgain()};

  function clicaAgain() {
    document.getElementById("produto").classList.remove("selected")
}
}

