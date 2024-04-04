const open = document.querySelector('.menuopen');
const close = document.querySelector('.menuclose');
const layer = document.querySelector('.layer1');

open.onclick = function(){
    layer.classList.add('check');
}

close.onclick = function(){
    layer.classList.remove('check')
}