const produto = document.querySelectorAll('.produto');

for (prod of produto) {
  prod.onclick = function(e) {

    const square = this.querySelector('#content');
    square.classList.toggle('selected');

    const head = this.querySelector('#bg-title');
    head.classList.toggle('selected');


    const compra = this.querySelector('#comprar');
    compra.onclick = function(e) {
      e.stopPropagation();
    };
  }
};
