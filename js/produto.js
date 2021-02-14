const produto = document.querySelectorAll('#produto');

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





const laco = document.querySelector('.busca-laco')
const pulseira = document.querySelector('.busca-pulseira')
const chapeu = document.querySelector('.busca-chapeu')
const tiara = document.querySelector('.busca-tiara')
const viseira = document.querySelector('.busca-viseira')


laco.onclick = function(e) {
  const lacos = document.querySelector('#lacos')
  console.log(lacos)
  lacos.classList.toggle('produto-selecionado')

  
}
