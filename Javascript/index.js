

const acordionItems = document.querySelectorAll('.acordion-item');

acordionItems.forEach((i) => {
    const btnAccord = i.querySelector('.btn-accord');  

    const descripcion = i.querySelector('.accord-descripcion');  
    const icon = i.querySelector('i img');  


    btnAccord.addEventListener('click', function () {
        
        descripcion.classList.toggle('close');
        
        if (descripcion.classList.contains('close')) {
            icon.src = './assets/images/icon-plus.svg';  

        } else {
            icon.src = './assets/images/icon-minus.svg';  
        }
    });
});