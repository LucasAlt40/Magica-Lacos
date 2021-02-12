document.querySelector('#laco').onclick = function() {clica()};

function clica() {

  document.querySelector('#produto').classList.toggle('selected');
  document.querySelector('#infos').classList.toggle('selected-infos');
  
}