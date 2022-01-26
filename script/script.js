function removeStyles(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i].removeAttribute('id');
    }
}

let myPlate = document.getElementsByClassName('prato');
console.log(myPlate);

for (let value of myPlate){
    value.addEventListener('click', function(){
        removeStyles(myPlate);
        this.setAttribute('id', 'buttonClicked');
    });
}

let myDrink = document.getElementsByClassName('bebida');
console.log(myDrink);

for (let value of myDrink){
    value.addEventListener('click', function(){
        removeStyles(myDrink);
        this.setAttribute('id', 'buttonClicked');
    });
}

let myDessert = document.getElementsByClassName('sobremesa');
console.log(myDessert);

for (let value of myDessert){
    value.addEventListener('click', function(){
        removeStyles(myDessert);
        this.setAttribute('id', 'buttonClicked');
    });
}

if (document.querySelectorAll('#buttonClicked').length === 3){
    document.querySelector('.button').setAttribute('id', 'complete');
}