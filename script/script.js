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
            if (document.querySelectorAll('#buttonClicked').length === 3){
                document.querySelector('.checar-pedido p').innerHTML = 'Fechar pedido';
                document.querySelector('.checar-pedido').style.backgroundColor = '#32B72F';
                botao.disabled = false;
                // let message = mandarMensagem();
                // document.querySelector('form').setAttribute('action', `https://wa.me/5519991029727?text=${message}`);
            
            }
        });
    }
}

function mandarMensagem() {
    let str = "Olá, gostaria de fazer o pedido: \n - Prato: Frango Yin Yang \n - Bebida: Coquinha Gelada \n - Sobremesa: Pudim \n Total: R$ 27,70";
    let a = encodeURIComponent(str);
    window.open("https://wa.me/55197?text=" + a, "_blank");
}

function checarPedido() {
    document.querySelector('.finalizar').style.display = 'flex';
}

let myPlate = document.getElementsByClassName('prato');
let myDrink = document.getElementsByClassName('bebida');
let myDessert = document.getElementsByClassName('sobremesa');
let botao = document.querySelector('.checar-pedido');
botao.disabled = true;

selecionar(myPlate);
selecionar(myDrink);
selecionar(myDessert);

botao.onclick = checarPedido;

if (document.querySelectorAll('#buttonClicked').length === 3){
    document.querySelector('.button').setAttribute('id', 'complete');
}