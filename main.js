var light = document.getElementsById('m1');

light.addEventListener('click', function(light){
    light.target.classList.toggle('m2');
})