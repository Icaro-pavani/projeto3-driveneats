function removeStyles(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].removeAttribute('id');
    }
}

function selecionar(campo){
    for (let value of campo){
        value.addEventListener('click', function(){
            removeStyles(campo);
            this.setAttribute('id', 'buttonClicked');
        });
    }
}

let myPlate = document.getElementsByClassName('prato');
let myDrink = document.getElementsByClassName('bebida');
let myDessert = document.getElementsByClassName('sobremesa');

let botao = document.querySelector('.button');
// botao.disabled = true;

selecionar(myPlate);
selecionar(myDrink);
selecionar(myDessert);

if (document.querySelectorAll('#buttonClicked').length === 3){
    document.querySelector('.button').setAttribute('id', 'complete');
}