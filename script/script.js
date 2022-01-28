let myPlate = document.getElementsByClassName('prato');
let myDrink = document.getElementsByClassName('bebida');
let myDessert = document.getElementsByClassName('sobremesa');
let selecionados;
let pos;
let nome;
let endereco;
let botao = document.querySelector('.checar-pedido');
let botaoCancelar = document.querySelector('.cancelar');
let botaoPedir = document.querySelector('.pedir');
botao.disabled = true;

function removeStyles(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('buttonClicked');
    }
}

function selecionar(campo) {
    for (let value of campo) {
        value.addEventListener('click', function () {
            if (this.classList.contains('buttonClicked')) {
                this.classList.toggle('buttonClicked');
            } else {
                removeStyles(campo);
                this.classList.add('buttonClicked');
            }

            if (document.querySelectorAll('.buttonClicked').length === 3) {
                document.querySelector('.checar-pedido p').innerHTML = 'Fechar pedido';
                document.querySelector('.checar-pedido').classList.add('botao-ativado');
                botao.disabled = false;
            } else {
                document.querySelector('.checar-pedido p').innerHTML = 'Selecione os 3 itens para fechar o pedido';
                document.querySelector('.checar-pedido').classList.remove('botao-ativado');
                botao.disabled = true;
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
    let total;
    nome = prompt('Nome:');
    endereco = prompt('Endereço:');
    selecionados = document.querySelectorAll('.buttonClicked');
    pos = document.querySelectorAll('td');
    pos[0].innerHTML = selecionados[0].querySelector('h3').innerHTML;
    pos[1].innerHTML = selecionados[0].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, "");
    pos[2].innerHTML = selecionados[1].querySelector('h3').innerHTML;
    pos[3].innerHTML = selecionados[1].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, "");
    pos[4].innerHTML = selecionados[2].querySelector('h3').innerHTML;
    pos[5].innerHTML = selecionados[2].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, "");
    total = Number(pos[1].innerHTML.replace(',', '.')) + Number(pos[3].innerHTML.replace(',', '.')) + Number(pos[5].innerHTML.replace(',', '.'));
    pos[7].innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    document.querySelector('.finalizar').classList.add('fechado');
}

function cancelarConfirmacao() {
    document.querySelector('.finalizar').classList.remove('fechado');
}

selecionar(myPlate);
selecionar(myDrink);
selecionar(myDessert);

botao.onclick = checarPedido;
botaoCancelar.onclick = cancelarConfirmacao;