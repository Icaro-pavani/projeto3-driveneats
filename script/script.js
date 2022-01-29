// Abaixo aloca os elementos de cada item (prato, bebida e sobremesa) em variáveis de vetores
let myPlate = document.getElementsByClassName('prato'); 
let myDrink = document.getElementsByClassName('bebida');
let myDessert = document.getElementsByClassName('sobremesa');

// Abaixo os botòes do HTML são alocas em variáveis
let botao = document.querySelector('.checar-pedido');
let botaoCancelar = document.querySelector('.cancelar');
let botaoPedir = document.querySelector('.pedir');

// Desabilita o botão para confirmar o pedido
botao.disabled = true;

// Definição das variáveis globais
let pos;    //posições dos dados dentro da tabela da confirmação do pedido
let total;  //Total do pedido
let nome;   //Aloca o nome quando pedido no pormpt  
let endereco;   //Aloca o endereço pedido no pormpt

// Função para remover todos os itens já selcionados da subcategoria (prato, bebida ou sobremesa)
function removeStyles(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].classList.remove('buttonClicked');
    }
}

/* Função para criar a reação ao clique para todos os elementos das categorias pratos, bebida e sobremesa
e verifica a seleção de um item de cada categoria para transformar e liberar o botão de confirmação */
function selecionar(campo) {
    // ativa como se fosse onclick para cada item
    for (let value of campo) {
        value.addEventListener('click', function () {
            if (this.classList.contains('buttonClicked')) {
                this.classList.toggle('buttonClicked');
            } else {
                removeStyles(campo);
                this.classList.add('buttonClicked');
            }

            // checa a seleção dos 3 itens
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

// Função para mandar a mensagem com o pedido pelo whatsapp
function mandarMensagem() {
    let str = `Olá, gostaria de fazer o pedido:\n- Prato: ${pos[0].innerHTML}\n- Bebida: ${pos[2].innerHTML}\n- Sobremesa: ${pos[4].innerHTML}\nTotal: R$ ${total.toFixed(2)}\n\nNome: ${nome}\nEndereço: ${endereco}`;
    let a = encodeURIComponent(str);
    window.open("https://wa.me/5519991029727?text=" + a, "_blank");
}

// Função para trocar os valores da tabela de confirmação do pedido para os valores dos itens selecionados
function checarPedido() {
    nome = prompt('Nome:');
    endereco = prompt('Endereço:');
    let selecionados = document.querySelectorAll('.buttonClicked');
    pos = document.querySelectorAll('td');
    pos[0].innerHTML = selecionados[0].querySelector('h3').innerHTML;
    pos[1].innerHTML = selecionados[0].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, ""); //replace troca apaga todos os caracteres menos os adicionados dentro do []
    pos[2].innerHTML = selecionados[1].querySelector('h3').innerHTML;
    pos[3].innerHTML = selecionados[1].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, "");
    pos[4].innerHTML = selecionados[2].querySelector('h3').innerHTML;
    pos[5].innerHTML = selecionados[2].querySelector('h4').innerHTML.replace(/[^0-9.,-]+/g, "");
    total = Number(pos[1].innerHTML.replace(',', '.')) + Number(pos[3].innerHTML.replace(',', '.')) + Number(pos[5].innerHTML.replace(',', '.'));
    pos[7].innerHTML = total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }); //toLocaleString transforma o valor direto para o padrão de moeda local
    document.querySelector('.finalizar').classList.add('fechado');
}

// função para fechar a tela de confirmação quando clicar no botão cancelar
function cancelarConfirmacao() {
    document.querySelector('.finalizar').classList.remove('fechado');
}

// Abaixo ativa a função selecionar para os pratos, bebidas e sobremesas
selecionar(myPlate);
selecionar(myDrink);
selecionar(myDessert);

// Abaixo cria onclick para os botões vinculados as suas respectivas funções
botao.onclick = checarPedido;
botaoCancelar.onclick = cancelarConfirmacao;
botaoPedir.onclick = mandarMensagem;